// Generics
// TS에서 함수, 클래스,인터페이스,타입 앨리어스를 사용할때
// 여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용

// 함수에서 Generics 사용하기

// 객체와 객체를 합치는 함수
function merge(a:any,b:any): any { // any는 어떤 타입이던 상관 x
    return {
        ...a,
        ...b
    };
}

const merged = merge({name: '홍길동'}, {age: 25});
console.log(merged);
function wrap<T>(param: T): T {
    return param;
}

const wrapped = wrap(10);
console.log(wrapped);
const wrapped2 = wrap('hello');
console.log(wrapped2);
// const wrapped3 = wrap<string>(1);

// 인터페이스에서 제네릭 사용
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['안녕', '하세요']
}

// 타입에서 제네릭 사용
type TypeItems<T> = {
    list: T[];
}

const typeItems : TypeItems<number> = {
    list: [1, 2, 3]
}
console.log(typeItems.list);


// 클래스에서 제네릭 사용
class Queue<T> {
    list: T[] = [];

    // 길이 반환
    get length() {
        return this.list.length;
    }
    // 배열 추가
    enqueue(item: T) {
        this.list.push(item);
    }
    // 배열 제거
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
