class Circle{
    draw() {
        console.log("画圆")
    }
}

class Decorator extends Circle{

    constructor() {
        super()
    }

    setRedBorder(){
        console.log("设置红色边框")
    }
}

let dec = new Decorator()

dec.draw();

dec.setRedBorder();



class Decorator_s{
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(this.circle)
    }
    setRedBorder(circle) {
        console.log('设置红色边框')
    }
}

let circle = new Circle();
circle.draw();

let dec_s = new Decorator_s(circle);


//ES7装饰器 core-decorators

