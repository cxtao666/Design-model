let fs = require("fs");

function read(url){

    let promise = new Promise((resolve,reject) => {
        fs.readFile(url, 'utf-8', (error,data) => {
            if (error) {
                reject(error)   //抛出异常,也可以用throw
            } else {
                resolve(data)
            }
        });
    })
    return promise;
}

async function readData(url) {
    let data = await read(url);
   let buffer =  new buffer(data)

    console.log(data);
}

readData("./unsplash-Erwan Hesry.jpg");