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
    function People(name, age) {
        this.age = age;
        this.name = name;
        this.weight = 120;
    }
    People.prototype.eat = function () {
        console.log(this.name + " eat something");
    };
    People.prototype.speak = function () {
        console.log("myname is " + this.name + ",age " + this.age);
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        return _super.call(this, name, age) || this;
        // this.weight = number
    }
    Student.prototype.getWeight = function () {
        console.log("" + this.weight);
    };
    return Student;
}(People));
var xiaoming = new Student("xiaoming", 14);
xiaoming.getWeight();
