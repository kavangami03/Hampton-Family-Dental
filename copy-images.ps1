$src = 'C:\Users\softq\.gemini\antigravity-ide\brain\e610f193-4cc5-4fa3-a48d-46df758de181'
$dst = 'd:\All AI Generated Website\Hampton Family Dental\hampton-family-dental\public\images'
Get-ChildItem $src -Filter '*.png' | ForEach-Object {
    $name = $_.BaseName -replace '_\d+$',''
    $name = $name -replace '_','-'
    Copy-Item $_.FullName (Join-Path $dst "$name.png") -Force
    Write-Host "Copied: $name.png"
}
