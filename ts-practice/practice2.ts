

function sum(x:number, y:number):number {
    return x + y;
}
sum(1, 0)
console.log(sum(1, 0));

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log('sum:'+total);

function returnNothing(): void {
    console.log('returnNothing');
}

// interface 
// interface 는 클래스 또는 객체를 위한 타입지정할 때 사요되는 문법

// Shape 라는 interface

interface Shape {
    getArea(): number; // Shape interface 에 들어갈 항목
}

class Circle implements Shape {
    // implements 를 통해 명시
    // radius: number;
    constructor(public radius: number) { // public 를 통해 명시
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI; 
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;
    constructor(private width: number,protected height: number) { // private 를 통해 명시
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius); // public
// console.log(rectangle.width);
// console.log(rectangle.height);
console.log(circle.getArea());
console.log(rectangle.getArea());

// 클래스가 아닌 일반 객체를 interface를 사용하여 타입지정
interface Person {
    name : string;
    age ?: number;  // ? : 설정해도 되고 안해도 되는 값
}

interface Developer extends Person {
    name : string;
    age?: number;
    language : string[];
}

const person : Person = {
    name : '이름',
    age : 25
}

const expert : Developer = {
    name: '빌게이츠',
    language : ['C','C++','React']

};

console.log(expert);
console.log(person);
console.log(expert.age);
console.log(expert.language);
console.log(person.age);
