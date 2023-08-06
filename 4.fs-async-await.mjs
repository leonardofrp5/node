import { readFile } from 'node:fs/promises';

console.log('-------- Estamos ejecutando primer archivo -------');
const text = await readFile('./file.txt', 'utf-8');
console.log(text);

console.log('-------- Estamos ejecutando otras cosas -------');

console.log('-------- Estamos ejecutando segundo archivo -------');
const text2 = await readFile('./file2.txt', 'utf-8');
console.log(text2);
