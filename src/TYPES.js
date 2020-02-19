var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.saySome = function () {
    };
    return People;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name) {
        return _super.call(this, name) || this;
    }
    A.prototype.saySome = function () {
        console.log('A');
    };
    return A;
}(People));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name) {
        return _super.call(this, name) || this;
    }
    B.prototype.saySome = function () {
        console.log('B');
    };
    return B;
}(People));
var a = new A('a');
a.saySome();
var b = new B('b');
b.saySome();
