class Greeter {
    private name:string 
     move (){

    }
}
//通过super调用父类
// 使用get 和 set 对变量的读取和写入操作 进行设置
// static属性的使用
// 和java一样,静态属性不存在于类创建的对象中
// 抽象类  包含这个关键字 abstract
// 抽象类可以拥有抽象方法,抽象类不可以被实例化
// 通过this调用对象自身
// 接口是可以继承类的
new Greeter();

class Grid{
    static origin = [1,2,3,"wrc"]
}

let grid = new Grid;

Grid.origin.push("abd")

abstract class Animal{
   abstract make():void
   move(){
       console.log("123")
   }
}

class Dog extends Animal{
    make(){
       console.log("666") 
    }

    get(){
        console.log(this.make());
    }
}

interface Good extends Dog {
    do()
}
