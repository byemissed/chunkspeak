const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html' : 'text/html; charset=utf-8',
  '.css'  : 'text/css; charset=utf-8',
  '.js'   : 'application/javascript; charset=utf-8',
  '.json' : 'application/json',
  '.png'  : 'image/png',
  '.jpg'  : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.gif'  : 'image/gif',
  '.svg'  : 'image/svg+xml',
  '.ico'  : 'image/x-icon',
  '.mp4'  : 'video/mp4',
  '.webm' : 'video/webm',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf'  : 'font/ttf',
  '.jar'  : 'application/java-archive',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  // Klasör ise index.html'e yönlendir
  function serveFile(fp) {
    fs.stat(fp, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end(`404 — Not found: ${urlPath}`);
      }

      const ext  = path.extname(fp).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';

      if (ext === '.mp4' && req.headers.range) {
        const range = req.headers.range;
        const total = stat.size;
        const [startStr, endStr] = range.replace(/bytes=/, '').split('-');
        const start = parseInt(startStr, 10);
        const end   = endStr ? parseInt(endStr, 10) : total - 1;
        const chunkSize = end - start + 1;
        res.writeHead(206, {
          'Content-Range' : `bytes ${start}-${end}/${total}`,
          'Accept-Ranges' : 'bytes',
          'Content-Length': chunkSize,
          'Content-Type'  : mime,
        });
        return fs.createReadStream(fp, { start, end }).pipe(res);
      }

      res.writeHead(200, {
        'Content-Type'  : mime,
        'Content-Length': stat.size,
        'Cache-Control' : 'no-cache',
      });
      fs.createReadStream(fp).pipe(res);
    });
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      serveFile(path.join(filePath, 'index.html'));
    } else {
      serveFile(filePath);
    }
  });

  const now = new Date().toLocaleTimeString('tr-TR');
  console.log(`[${now}] ${req.method} ${req.url}`);
});

server.listen(PORT, () => {
  console.log(`\n  ChunkSpeak Local Server`);
  console.log(`  ─────────────────────────`);
  console.log(`  http://localhost:${PORT}\n`);
});
