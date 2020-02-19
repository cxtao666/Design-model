class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

class Son extends Person{
    constructor(name,age,number){
        super(name,age);
        this.number = number;
    }
    getNumber(){
        return this.number
    }
}

let p = new Son("涛哥",20,18);

alert(p.getName());
alert(p.getAge());
alert(p.getNumber());

console.log(p.number);
// 子类对象可以调用父类的方法,也可以调用父类的构造函数
//  属性直接.就可以出来了

//es6中没有public,protected,private这3个关键字,所以也并没有真正的封装性可言,js的类中是不能定义变量的

//ts不灵活,但代码很规范,很标准,js灵活,野路子多


