let foo = 42;
foo = 'ttt';
console.log(typeof foo);

//------------------------ 원시 타입
// 문자열 String
const name = 'Edun';
// Number
const age = 38;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

//------------------------ 참조 타입
// Array 배열 : 객체의 하나의 형태
const hobbies = ['wailing', 'books'];
// Object 객체 
const addr = {
    province : '부산광역시',
    city : '남구'
}

console.log(typeof hobbies);
console.log(Array.isArray(hobbies));