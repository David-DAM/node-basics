const fs = require('node:fs');
const fsp = require('node:fs/promises');
//Convert to a promise
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

//File info synchronous
const stats = fs.statSync('./info.txt');
//console.log(stats);

//Async file reading with callbacks
fs.readFile('./info.txt','utf-8',(error, text) => {
   //console.log(text);
});

//Synchronous file reading
const text = fs.readFileSync('./info.txt','utf-8');
//console.log(text);

//Promises
fsp.readFile('./info.txt','utf-8')
.then(text => console.log(text));

//IIFE - Immediately Invoked Function Expression with async/await
(
    async () => {
        const text = await fsp.readFile('./info.txt','utf-8')
        console.log(text);
    }
)()

//Parallel with promises
Promise.all([
    fsp.readFile('./info.txt','utf-8'),
    fsp.readFile('./info.txt','utf-8')
]).then( ([text,secondText]) => {
     console.log(text);
     console.log(secondText);
});

fs.readdir('.',(error,files) => {
    files.forEach(file =>{
        console.log(file);
    })
});