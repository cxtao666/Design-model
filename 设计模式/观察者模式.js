// 主题,保存状态,状态变化之后触发所有观察者对象

class Subject{
    constructor() {
        this.state = 0;
        this.observers = []
    }

    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }

    attach(observer) {
        this.observers.push(observer)
    }

}

// 观察者
class Observer{
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update,${this.subject.getState()}`)
    }
}

// 观察者对象中有到主题的指引
// 主题中有观察者队列的指引

let s = new Subject()

let o1 = new Observer('o1', s);

s.setState(1)

//网页事件绑定
// promise
// 回调函数
// nodejs 自定义事件
// 事件监听机制 观察者模式
// 包括node 的事件驱动
// 浏览器的事件驱动

// 按钮的点击也是状态变化
// 网络请求也是状态变化
// 文件的读取也是状态变化

const EventEmitter = require('events').EventEmitter

let emitter1 = new EventEmitter()

emitter1.on('some', (data) => {
    console.log(data)
    console.log('some event is occured 1')
})

emitter1.on('some', (data) => {
    console.log(data + '是姓名')
    console.log('some event is occured 2')
});

//emitter1.emit('some')
emitter1.emit('some','zhangsan')

// module.exports = emitter1

// 任何构造函数都可以继承 EventEmitter 的方法 on emit

// 流的使用