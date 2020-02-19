function extend <T,U>(first:T,second:U):T & U {
    let result = {} as T & U

    for (let i in first) {
        result[i] = first[i] as any
    }

    for (let id in second) {
        if (!result[id]) {
            result[id] = second[id] as any
        }
    }
    return result
}

class Person{
   public name
    constructor(name:string) {
         this.name = name
    }
}

interface Log{
    log()
}

class Cos implements Log{
    log() {
        
    }
}

let jim = extend(new Person('jim'),new Cos())

jim.log()
jim.name