let prototype = {
    getName() {
        console.log(this.type);
        console.log(this.name);
    },
   setName (name) {
       this.name = name
    },
   type:"object"
}

let one = Object.create(prototype);

one.setName("小明");

one.getName()

let two = Object.create(prototype);

two.setName("小张");

two.getName()


