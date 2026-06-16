const https = require('https');
https.get('https://www.brennerdentalgroup.com/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  console.log('Status Code:', res.statusCode);
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const regex = /https?:\/\/[^\s"']+\.(?:jpg|png|webp|gif)/gi;
    const matches = html.match(regex) || [];
    console.log('Unique images:', Array.from(new Set(matches)));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
