const path = require('node:path');

//folder separator
console.log(path.sep)

const filePath = path.join('content','subfolder','test.js');
console.log(filePath);

const base = path.basename('/tmp/folder/secrets.txt');
const base2 = path.basename('/tmp/folder/secrets.txt','.txt');
console.log(base);
console.log(base2);

const extension = path.extname('file.jpg');
console.log(extension);