//接口
interface label{
    label:string
}

interface SquareConfig{
    color?:string   //问号表示的是可选的类型
    width?:number
}


function printLabel(label:label){
        console.log(label.label)
}

let obj = {size:10,label:"size 10 Object"}

printLabel(obj) //传递的参数要包含label的对象

// 使用接口定义的方式和直接定义一样

// 必需要要有这个属性,且属性是一致的

function create(config:SquareConfig) :SquareConfig{
        let newSquare = {color:'width',area:100};
        
        if(config.color){
            newSquare.color = config.color
        }

        
        if(config.width){
            newSquare.area = config.width
        }

        return newSquare
}

console.log(create({}))

interface Point{
    readonly x:number
    readonly y:number  // 只读属性
}

let p1:Point = {x:10,y:20}

// 只读属性     变量 const   属性  readonly

 
//  定义函数类型,函数类型的类型检查

interface SearchFunc{
    (source:string,subString:string):boolean // (参数,参数):返回值的函数
}

let mySearch:SearchFunc = (a,b) =>{
    return false
}

mySearch("a","b");

// 接口就是自定义的类型


interface StringArr {
    [index :number]:string   //索引签名
}

let arr:StringArr

arr = 'option'

arr[1] = 'wwe'


interface ClonkInterface {
    currentTime:Date, //定义的变量
    setTime() //定义的函数
    arr:number[]
}


// 类必须实现所有接口的定义
// 用多个类实现一个接口,定义参数时写接口名,然后就可以把凡是实现该接口的类的对象传进去
// 也可以直接定义参数时写类名


class CLOCK implements ClonkInterface {
    currentTime:Date

    arr:any[]

    constructor(h,m){

    }

    setTime(){

    }

    goto(){

    }
}

let clock = new CLOCK(1,3);

clock.arr.push("123");

function creates (app:ClonkInterface){
   // app.setTime()
}

creates(clock)

// 接口继承类

class Control {
    private state:any
    time(){
        console.log()
    }
}

interface SelectableControl extends Control{
    select()
}

class Button extends Control implements SelectableControl{
    select() {

    }
}



