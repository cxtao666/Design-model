interface Preson {
    firstName:string
    lastName:string 
}

class User{
    fullname:string
    firstName:string
    lastName:string

    constructor(firstname:string,lastname:string){
        this.firstName = firstname
        this.lastName = lastname
    }
}

function greeter(preson:Preson){
    return 'Hello' + preson.firstName + preson.lastName
}
/* 
let user:Preson = {
    firstName:'cai',
    lastName:'xiantao'
} */

let user = new User('cai','xiantao');

console.log(greeter(user));