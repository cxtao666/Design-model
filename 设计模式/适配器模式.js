class Adaptee{
    specific() {
         return '德国插头'
     }
}
 
class Target{   // 适配器
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specific()
        return `${info} - 转换器 - 中国标准插头`
    }
}

let target = new Target()

let res = target.request()

console.log(res);

