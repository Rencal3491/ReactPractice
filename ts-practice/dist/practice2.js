"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 0);
console.log(sum(1, 0));
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log('sum:' + total);
function returnNothing() {
    console.log('returnNothing');
}
var Circle = /** @class */ (function () {
    // implements 를 통해 명시
    // radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius); // public
// console.log(rectangle.width);
// console.log(rectangle.height);
console.log(circle.getArea());
console.log(rectangle.getArea());
var person = {
    name: '이름',
    age: 25
};
var expert = {
    name: '빌게이츠',
    language: ['C', 'C++', 'React']
};
console.log(expert);
console.log(person);
console.log(expert.age);
console.log(expert.language);
console.log(person.age);
