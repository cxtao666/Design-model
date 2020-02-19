// 科学上网
// 反向代理
// 正向代理
// 和适配器模式相似

class ReadImg{
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk()
    }
    display() {
        console.log('display')
    }
    loadFromDisk() {
        console.log('Loading'+this.fileName)
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}

let proxyimg = new ProxyImg('1.png');

proxyimg.display();

// ES6 Proxy 

let star = {
    name: "涛哥",
    age: 22,
    phone:"1246784448"
}

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return "13342711406"
        }
        if (key === 'price') {
            return 120000
        }
        return target[key]
    },
    set: function (target,key,val) {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('价格太低')
            }
            else {
                target[key] = val;
                return true
            }
        }
    }
})

console.log(agent);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 150000

console.log(agent.customPrice)

agent.customPrice = 90000