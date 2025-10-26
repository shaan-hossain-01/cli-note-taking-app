import fs from 'node:fs/promises';

const readPJson = async ()=>{
    const pjsonPath = new URL('./package.json', import.meta.url);
    const pjson = await fs.readFile(pjsonPath, 'utf-8');
    console.log(JSON.parse(pjson));
}

// readPJson();

const writePJson = async ()=>{
    const newFile = new URL('./demo.js', import.meta.url);
    await fs.writeFile(newFile, `console.log('hello world')`);
}
writePJson();