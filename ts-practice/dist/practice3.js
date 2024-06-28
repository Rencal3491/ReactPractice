"use strict";
// Generics
// TS에서 함수, 클래스,인터페이스,타입 앨리어스를 사용할때
// 여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 함수에서 Generics 사용하기
// 객체와 객체를 합치는 함수
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ name: '홍길동' }, { age: 25 });
console.log(merged);
function wrap(param) {
    return param;
}
var wrapped = wrap(10);
console.log(wrapped);
var wrapped2 = wrap('hello');
console.log(wrapped2);
var items = {
    list: ['안녕', '하세요']
};
var typeItems = {
    list: [1, 2, 3]
};
console.log(typeItems.list);
// 클래스에서 제네릭 사용
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        // 길이 반환
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    // 배열 추가
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    // 배열 제거
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
