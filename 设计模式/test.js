//let emitter1 = require('./观察者模式')

const fs = require('fs');

const readline = require('readline');  // 按行读文件

let rl = readline.createInterface({
    input: fs.createReadStream('./观察者模式.js')   //创建文件读写的流      
    // input  读进来
})

let lineNum = 0;

rl.on('line', (line) => {       // line是每一行的内容
    lineNum++;
})

rl.on('close', () => {
    console.log('lineNum',lineNum)  //统计一共有多少行
})