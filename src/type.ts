let isDone:boolean = true;

let decliteral:number = 0x20; //16进制

let binaryLiteral:number = 0b10 // 二进制数

let octalLiteral:number = 0o24  // 八进制数

let str:string = 'bob'

let tao:string = "hello"

str = `cxtao ${tao}`

let list: number[] = [1,2,3];  //数字数组

let x:[string,number] = ['hello',21];

x[0] = 'world'


// 枚举
enum Color{
    Red = 1,
    Green = 2,
    Blue = 3
}

let c:Color = Color.Green;

let colorName:string = Color[2]

let notSure = 4;

let anynum:any = 4;

function warnUser() :void {

}

// void 函数不返回任何值,声明为void

// void 只能复制null和undefined

let num:number |null = 3 ;   //联合类型

num = null;

//never 类型  不返回值类型

function error(message:string):never{
    throw new Error(message)
}

declare function create(o:object|null):void;


let value : any = 'this is a string';

let strlen:number = (<string>value).length  //类型转换

// value as string      类型转换

// 变量的声明提前   var     不存在局部变量,存在变量覆盖, 异步执行

for(var i = 0; i< 10; i++){
    (function(i){
        setTimeout(()=>{
            console.log(i)
        },100*i)
    })(i)
}
// 闭包产生局部变量,解决单线程的问题

// let  在一个块内不允许变量重复声明  没有变量提升的问题   产生块级作用域

let a = 10;

// 针对每次迭代都会创建新的作用域
for(let i = 0;i < 10;i++){
    setTimeout(()=>{
        console.log(i);
    },100*i);
}

const numLivesForCat = 9;     //赋值后不允许改变

// 如果是对象的话,那么引用的对象不可以改变,可以修改对象的成员

let {abc,bcd} = {abc:1,bcd:2};  //对象解构

let [d,...b] = [1,2,3,4,5];    // 数组解构  ...后面加变量名

//展开
let first = [1,2];
let second = [3,4];

let bothPlus = [0,...first,...second,10];

let defauts = {
    food:'spicy',
    price:'$10'
}

let search = {...defauts,food:'rich'}  //会出现键值覆盖的情况



















