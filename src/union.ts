function padLeft(value:string,padding: string | number) {   // 联合类型
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === "string") {
        return padding + value
    }
    throw new Error(`${padding}has wrong`);
}

try {
    padLeft('hello world', 4)
}
catch (err){
   // console.log(err)
}

console.log('have catching wrong');


function isNumber(x: any): x is number {
    console.log(typeof(x))
    
    return x
}

console.log(isNumber("1"))

function f(x: number, y: number): number {
    
    if (!y || y === Infinity) {   // 这个对Infinity没作用
        throw new Error("args should not give undefined or null")
    }
    // 如果y的参数没被传进来,y就是默认值的undefined
    return x + y;
}

console.log(f(3, Infinity))  //null , undefined , NaN 都是传给 number类型的

