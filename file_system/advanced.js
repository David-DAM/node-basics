const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

let folder = (process.argv[2] != null) ? process.argv[2] : '.';

main(folder);

async function main(folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    }catch(err) {
        console.log('Error reading file: ' + err)
        process.exit(1);
    }

    const filesPromises = files.map(async file => {

        const filePath = path.join(folder, file);

        const stats = await fs.stat(filePath);

        let fileType = stats.isDirectory() ? 'd' : 'f';
        let fileSize = stats.size.toString();
        let fileDateTime = stats.mtime.toLocaleString();

        return `${pc.green(fileType)} ${pc.blue(file.padEnd(20))} ${pc.yellow(fileSize.padStart(10))}  ${pc.bgCyan(fileDateTime)}`;
    })

    let filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(file => {console.log(file)})
}

