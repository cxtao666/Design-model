class Receiver{
    exec() {
        console.log('执行')
    }
}

class Command{
    constructor(receiver) {
        this.receiver = receiver
    }
    cmd() {
        console.log('触发命令')
        this.receiver.exec()
    }
}

class Invoker{
    constructor(command) {
      this.command  = command 
    }
    invoke() {
        console.log('开始')
        this.command.cmd()
    }
}

let soldier = new Receiver()    // 士兵

let trumpeter = new Command(soldier)    // 小号手

let general = new Invoker(trumpeter) // 将军

general.invoke()