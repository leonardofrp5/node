const http = require('node:http');
const { findAvaiblePort } = require('./10.free-port');

const server = http.createServer((req, res) => {
  console.log('Recibio la request');
  res.end('Hola Leo');
});

findAvaiblePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Esta escuchando en el puerto http://localhost:${port}`);
  });
});
