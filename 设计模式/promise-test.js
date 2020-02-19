let MyPromise = require('./promise-demo');
let fs = require('fs')

let promise = new MyPromise((resolve,reject) => {
    
    fs.readFile('./单例模式s.ts', 'utf-8', (err,data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

promise.then((data) => {
    console.log(data);
   // return 5;
  let promise = new MyPromise((resolve,reject) => {
    
    fs.readFile('./单例模式.js', 'utf-8', (err,data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
}) 
    return promise;

}, (data) => {
        console.log(data);
        return 100;
}).then((data) => {
    console.log(data);
    throw new Error('好惨')
}, (data) => {
        console.log("110");  
}).then((data) => {
    return 4;
}, (data) => {
    console.log("有出错了")    
}).catch((data) => {
    console.log(data)
}).then((data) => {
    console.log(data);
    throw new Error("wrong")
}).then((data) => {
    console.log(data);
}).then(() => {
    
}, (data) => {
        console.log(data)
})