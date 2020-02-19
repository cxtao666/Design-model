var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                // 运行时this指向了global
                // 箭头函数保存的是函数创建的this的值
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
// 通过使用箭头函数,使得cardPicker执行时this的指向和createCardPicker执行时的this相同
// 因为createCardPicker调用时this的指向是deck对象,所以cardPicker调用时this的指向也是deck对象
console.log(pickedCard);
var Hander = /** @class */ (function () {
    function Hander() {
        var _this = this;
        this.onClickBad = function (e) {
            _this.type = e.type;
            console.log('click');
        };
    }
    return Hander;
}());
var h = new Hander();
var UIElement = {
    addClickListener: function (callback) {
        var event = {
            type: "nihao"
        };
        callback(event);
    }
};
UIElement.addClickListener(h.onClickBad);
//Hander 实现了回调函数的接口
// UIElement 实现了addClickListener 方法的接口
// event 实现了回调函数参数的接口
