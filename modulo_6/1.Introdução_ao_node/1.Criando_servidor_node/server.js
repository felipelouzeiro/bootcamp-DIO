const http = require('http');
const HOST = 'http://localhost';
const PORT = 3000;

http.createServer((req, res) => {
  res.end('<h1>Servidor criado.</h1>')
}).listen(PORT, () => console.log(`server is running ${HOST}:${PORT}`));