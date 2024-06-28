let count = 0;
count +=1;
// count = 'hello';



const message: string = 'Hello, World!';
console.log(message);

const done : boolean = true;
// const done2 : boolean = false;
// done2 = false;
const num : number[] = [10,101];
const messages : string[] = ['hello', 'world'];
num.push(1001);
// undifined, null 허용
let mightBeUndefined : string | undefined = undefined;
let nullableNumber : number | null = null;
let color : 'blue' | 'red' | 'pink'= 'red';
console.log(done, num, messages);