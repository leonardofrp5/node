const fs = require('node:fs');

console.log('-------- Estamos ejecutando primer archivo -------');
fs.readFile('./file.txt', 'utf-8', (err, text) => {
  console.log(err, text);
});

console.log('-------- Estamos ejecutando otras cosas -------');

console.log('-------- Estamos ejecutando segundo archivo -------');
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  console.log(err, text);
});
