const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  const file = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(file);
    const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png' };
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(data);
  });
});
server.listen(3000, () => console.log('Game server running on http://localhost:3000'));
