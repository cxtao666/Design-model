// 泛型
function identity <T>(arg: T):T {
    return arg
}

identity<string>("mystring"); // 手动确定类型

identity("mysql"); // 自动确定类型

// 泛型类型

let myIdentity: <T> (arg: T) => T = identity

let index:{<T>(arg:T):T} = identity

interface Gen{
    <T>(arg:T):T
  //app:<T> (arg: T) => T  //app 是一个泛型接口的函数
}  // Gen 是一个泛型接口的函数

let inner: Gen;

//泛型类

class GenN<T>{
    zeroValue: T
    add:(x:T,y:T) => T
}

let mysql = new  GenN <number>();

mysql.zeroValue = 4;

mysql.add = (x, y) => {
    return x+y
}

mysql.add(1, 4);


let 想你 = [1, 3, 4];

console.log(想你[1]);

class animal {
    num: number
}

//上下文类型

function createzoo() {
    return [1, "ax"];
}

