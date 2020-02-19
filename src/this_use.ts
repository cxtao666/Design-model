interface Card{
    suit: string
    card:number
}

interface Deck{
    suits: string[]
    cards: number[]
    createCardPicker(this:Deck):()=>Card
}


let deck:Deck = {       // deck对象是Deck接口的实现
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this:Deck) {  // 显示指定this指向那个接口
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            
            return {
                suit: this.suits[pickedSuit],
                // 运行时this指向了global
                // 箭头函数保存的是函数创建的this的值
                card:pickedCard%13
            }
        }
    }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
// 通过使用箭头函数,使得cardPicker执行时this的指向和createCardPicker执行时的this相同
// 因为createCardPicker调用时this的指向是deck对象,所以cardPicker调用时this的指向也是deck对象
console.log(pickedCard);

interface event{
    type:string
}


interface UIElement {
    addClickListener(onclick:(this:void,e:event)=>void):void
}

class Hander {
    type: string

    onClickBad = (e: event) => {

        this.type = e.type
        console.log('click')
    }
    
}

let h = new Hander()

let UIElement: UIElement = {
    addClickListener(callback) {
        let event: event = {
            type:"nihao"
        }
        callback(event)
    }
}

UIElement.addClickListener(h.onClickBad)

//Hander 实现了回调函数的接口
// UIElement 实现了addClickListener 方法的接口
// event 实现了回调函数参数的接口