
function abs(a,...d){
    return d
}
abs([1,3,4,5])

function add(x:number,y:number):number{
    return x+y 
}
function app (){

}
/// app("aa ","hhw ")  ts对参数进行了限定,这种写法在js没问题,但用ts写会报错

let func = (a?:number,b?:number)=>{

} // 可选参数

func(1,2)