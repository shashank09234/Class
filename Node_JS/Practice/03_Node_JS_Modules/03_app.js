/*
    1) fs module
    2) os module
    3) http module
    4) path Module
 */
//Load OS Module
const  fs = require('fs');
const  os = require('os');

//Total Memory
console.log(`Total Memory: ${os.totalmem()}`);


//Free Memory
console.log(`Free Memory: ${os.freemem()}`);

//Host Name
console.log(`Host Name: ${os.hostname}`);

//Home Directory
console.log(`Home Directory: ${os.homedir}`);

//User Name
console.log(`User Name: ${os.userInfo().username}`);

//Current Dir
console.log(`Current Directory: ${__dirname}`);

//File Name
console.log(`File Name: ${__filename}`);

//Write To a File
fs.writeFile('data.txt','Good Morning','utf8',(err) => {
    if(err) throw err;
    console.log('Data Saved');
});

//Read File
fs.readFile('03_app.js','utf8',(err,data) => {
    if(err) throw err;

    fs.writeFile('program.txt',data,'utf8',(err) => {
        if(err) throw err;
        console.log('Data Saved');
    });
});