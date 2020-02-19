// 系统中被唯一使用
// 一个类只有一个实例
// 以静态方法创建类的实例
// 内部中创建实例

class SingleObj{

    private SingleObj (){
    
}
    private static instance: SingleObj = null;
    
    public static getInstance() {
        if (this.instance === null) {
            this.instance = new SingleObj
        }
        return this.instance
    }

    public login(username:string,password:string) {
        console.log("login...")
    }
} 

let demo = SingleObj.getInstance();

demo.login("cxtao", "123456");