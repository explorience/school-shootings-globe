const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json'};
http.createServer((req,res) => {
  let p = req.url.split('?')[0];
  if(p === '/') p = '/index.html';
  const fp = path.join(dir, p);
  fs.readFile(fp, (err,data) => {
    if(err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(fp);
    res.writeHead(200, {'Content-Type': mime[ext]||'text/plain'});
    res.end(data);
  });
}).listen(8090, '0.0.0.0', () => console.log('Serving on 8090'));
