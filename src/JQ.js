class jQurey {
    constructor(seletor ){
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(seletor)) //将dom元素转为数组
        let len = dom ? dom.length : 0

        for(let i in dom){
            this[i] = dom[i]
        }

       /*  for(let i = 0 ;i < len;i++){
            this[i] = dom[i]
        } */
        this.length = len
        this.seletor = seletor || ''
    }
    append(node){

    }
    addClass(name){
        
    }
    html(data){

    }
}

window.$ = (seletor) => {
    return new jQurey(seletor)
}