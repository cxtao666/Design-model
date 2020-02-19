interface event{

    sayHi() // 定义了一个函数
    sayHi(): string // 定义了一个函数返回值是string的函数
    sayHi(dev: string): string    // 定义了一个包含一个字符串类型参数.且返回值是string的函数
    sayHI(dev: () => {}): string        // 定义了一个参数是一个函数的函数
    sayHi(dev:(dev:string)=>number):string  // 定义了一个参数是一个包含字符串的参数和返回类型是数字型的函数且返回值类型是字符串的函数
}