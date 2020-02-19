// 一个对象有状态变化
// 每次状态变化都会触发一个逻辑
// 不能总是用if...else来控制

class State{
    constructor(color) {
        this.color = color;
    }
   /*  handle(context) {
        console.log(`turn to ${this.color} light `)
        context.setState(this)
    } */
}

class Context{

    constructor() {
        this.state = null;
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        console.log(`turn to ${this.state.color} light `)
    }
}

let context = new Context();// 创建主体对象

let green = new State('green'); // 创建颜色状态

let yellow = new State('yellow')

let red = new State('red')

context.setState(green) //把颜色传递给主体

console.log(context.getState());

context.setState(yellow) //把颜色传递给主体

console.log(context.getState());

context.setState(red) //把颜色传递给主体

console.log(context.getState());

// 主体,状态分离

class CollectState{

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`turn to ${this.name}`)
    }

}

class Collect {
    state 
    constructor() {
        this.state = new CollectState("收藏");
    }
    click(state) {
        this.state = state;
        this.state.show();
        return state.name;
    }

}





