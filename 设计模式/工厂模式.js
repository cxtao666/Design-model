class Product{
    name
    constructor(name) {
        this.name = name
    }
    fun1() {
        alert("fun1")
    }
    fun2() {
        alert("fun2")
    }
    init() {
        alert('init')
    }
}

class Creator{
    create(name) {
        return new Product(name)
    }
}

let creator = new Creator()

let p = creator.create('p1')

try {
    p.fun1();
    p.fun2()
}
catch(err){

}
console.log("~工厂模式demo~")

//通过create把真正引用的外部构造函数封装起来
// 通过一个工厂把真正的构造函数和使用者隔离开,让创建对象和实例的时候有一个统一的入口,而不是把所有的构造都开放给所有的人来让它自己去生成
// create 就是一个工厂函数
// 构造函数和创建者分离
// 符合开放封闭原则