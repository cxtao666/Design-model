// 系统中被唯一使用
// 一个类只有一个实例
// 以静态方法创建类的实例

 /* var SingleObj = (function () {
    function SingleObj() {
    }
    SingleObj.prototype.SingleObj = function () {
    };
    SingleObj.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SingleObj;
        }
        return this.instance;
    };
    SingleObj.prototype.login = function (username, password) {
        console.log("login...");
    };
    SingleObj.instance = null;
    return SingleObj;
}());
var demo = SingleObj.getInstance();
console.log(demo.login("cxtao", "123456"));  */

// 这样也实现了无法创建多个对象,如果只调用函数不去直接改instance的指向的话

class SingleObj {
    login() {
        console.log('login...')
    }
    constructor() {
        this.state = "hide"
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
}

SingleObj.getInstance = (function () {
    let instance  // 通过闭包,让instance只能指向一个对象,所以单例模式无法创建多个对象
    return function () {
        if (!instance) {
            instance = new SingleObj()
        }
        return instance
    }
})()  // 使用了立即执行函数和闭包

let obj1 = SingleObj.getInstance();
let obj2 = SingleObj.getInstance();
console.log(obj1 === obj2)  //true

// 符合单一职责原则,只实例化唯一的对象
// 没法具体开放封闭原则,但是绝对不违反开放封闭原则