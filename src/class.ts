class People {
    name:string
    age:number
     weight:number  //只有自己或子类可以访问

    constructor (name:string,age:number){
        this.age = age
        this.name = name
        this.weight = 120
    }

    eat (){
        console.log(`${this.name} eat something`)
    }

    speak(){
        console.log(`myname is ${this.name},age ${this.age}`)
    }

}

class Student extends People {

    constructor(name,age){
        super(name,age);
       // this.weight = number
    }

    getWeight(){
        console.log(`${this.weight}`);
    }
}

let xiaoming = new Student ("xiaoming",14);

xiaoming.getWeight();
