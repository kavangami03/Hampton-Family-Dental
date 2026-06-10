"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ─── Intercept hash-anchor clicks ───
    // Routes through Lenis when smooth scroll is active, else falls back to a
    // native jump (the CSS `scroll-padding-top` keeps the target clear of the
    // fixed header in that path).
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Skip clicks inside overlays that manage their own navigation
      // (e.g. the mobile menu unlocks the body scroll first, then scrolls).
      if (target.closest("[data-skip-smooth-scroll]")) return;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Allow modifier-clicks / middle-clicks to behave normally
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const lenis = lenisRef.current;

      // "#" alone → scroll to top
      if (href === "#") {
        e.preventDefault();
        if (lenis) lenis.scrollTo(0, { offset: 0 });
        else window.scrollTo({ top: 0 });
        return;
      }

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(el, { offset: -72, duration: 1.4 });
      } else {
        el.scrollIntoView({ block: "start" });
      }

      // Update URL hash without jump
      if (window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Honor the user's reduced-motion preference: skip the JS smooth-scroll
    // rAF loop entirely (anchors still work via the native fallback above).
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      return () => document.removeEventListener("click", handleAnchorClick);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    // Expose Lenis globally so overlays (mobile menu, modals) can pause/resume scroll
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Track the rAF id so the loop is actually cancelled on unmount — the
    // previous version left it running against a destroyed Lenis instance.
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
