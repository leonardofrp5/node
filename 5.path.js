const path = require('node:path');

const filePath = path.join('register', 'users');
console.log(filePath);

const base = path.basename('/register/users/password.txt');
console.log(base);

const filName = path.basename('/register/users/password.txt', 'txt');
console.log(filName);

const extesion = path.extname('password.js');
console.log(extesion);
