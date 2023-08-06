import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log(platform());
console.log(release());
console.log(arch());
console.log(cpus());
console.log(freemem() / 1024 / 1024);
console.log(totalmem() / 1024 / 1024);
console.log(uptime() / 60 / 60);
