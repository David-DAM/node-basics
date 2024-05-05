const os = require('node:os');

console.log('Operative system: ' + os.platform());
console.log('Version operative system: ' + os.release());
console.log('Architecture: ' + os.arch());
console.log('Cpus: ' + os.cpus());
console.log('Free memory: ' + os.freemem() / 1024 / 1024);
console.log('Total memory: ' + os.totalmem() / 1024 / 1024);