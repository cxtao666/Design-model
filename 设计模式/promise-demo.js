class MyPromise{

    list = [];
   // index = 0;

    constructor(fn) {

      //  this.resolvelist = []
      //  this.rejectlist = []

        fn(this.resolve,this.reject)
    }

    resolve = (data) => {
           
        if (this.list.length > 0 ) {

            try {
                let fn = this.list.shift();

                if (fn[0] === undefined) {
                    this.resolve();
                    return;
                }
                data = fn[0](data);  
                
                if (data instanceof MyPromise) {
                    data.list = this.list;
                   // data.rejectlist = this.rejectlist;
                    return;
                } 
                
            } catch (err) {
                
                this.reject(err)
                return;
            }
            this.resolve(data);
        } 
            return data
    }

    reject = (data) =>{
        // throw new Error(data);
        if (this.list.length > 0) {

            try {
                let fn = this.list.shift();

                if (fn[1] === undefined) {
                    this.reject(data);
                    return;
                }

                data = fn[1](data);

                if (data instanceof MyPromise) {
                    data.list = this.list;
                   // data.rejectlist = this.rejectlist;
                    return;
                } 
            
            } catch (err) {
            
                this.reject(err)
                return;
            }
            this.resolve(data);
        } else {
            throw new Error(data);
        }
    }

    then(fn, fn1) {
        
       let arr =  [fn,fn1]
        this.list.push(arr);
        //this.rejectlist.push(fn1)
        return this;
    }
    catch(fn) {
        this.list.push([undefined, fn]);
        return this;
    }
}

module.exports = MyPromise