class People  {

    name:string
    constructor (name){
        this.name = name
    }

    saySome(){

    }
}

class A extends People{
    constructor(name){
        super(name)
    }

    saySome(){
        console.log('A')
    }
}

class B extends People {
    constructor (name){
        super(name);
    }

    saySome(){
        console.log('B')
    }
}

let a = new A ('a');

a.saySome()

let b = new B ('b');

b.saySome()