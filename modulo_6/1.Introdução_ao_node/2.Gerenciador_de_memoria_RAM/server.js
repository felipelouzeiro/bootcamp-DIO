const http = require('http');
const stats = require('./pcRAMUsage');

const HOST = 'http://localhost';
const PORT = 3000;

http.createServer((req, res) => {
  let url = req.url;

  if (url === '/stats') {
    res.end(JSON.stringify(stats));
  } else {
    res.end('<h1>Seja bem vindo!</h1>')
  }
}).listen(PORT, () => console.log(`server is running ${HOST}:${PORT}`));