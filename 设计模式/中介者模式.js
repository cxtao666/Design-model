class A {
     
    constructor() {
        this.number = 0;
    }

    setNumber(num, m) {
        this.number = num;
        if (m) {
            m.setB()
        }
    }
}

// 中介者
class Mediator{
    constructor(a,b) {
        this.a = a
        this.b = b
    }

    setA() {
        let number = this.b.number
        this.a.setNumber(number * 100)
    }
    setB() {
        let number = this.a.number
        this.b.setNumber(number / 100)
    }
}

class B {
    constructor() {
        this.number = 0;
    }
    setNumber(num, m) {
        this.number = num
        if (m) {
            m.setA()
        }
    }
}

let a = new A();

let b = new B();

let m = new Mediator(a, b); // 中介者作用

a.setNumber(100,m)

console.log(a.number, b.number);

b.setNumber(100, m)

console.log(a.number, b.number);