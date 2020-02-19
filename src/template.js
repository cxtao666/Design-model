// 泛型
function identity(arg) {
    return arg;
}
identity("mystring"); // 手动确定类型
identity("mysql"); // 自动确定类型
// 泛型类型
var myIdentity = identity;
var index = identity;
var inner;
//泛型类
var GenN = /** @class */ (function () {
    function GenN() {
    }
    return GenN;
}());
var mysql = new GenN();
mysql.zeroValue = 4;
mysql.add = function (x, y) {
    return x + y;
};
mysql.add(1, 4);
var 想你 = [1, 3, 4];
console.log(想你[1]);
var animal = /** @class */ (function () {
    function animal() {
    }
    return animal;
}());
//上下文类型
function createzoo() {
    return [1, "ax"];
}
