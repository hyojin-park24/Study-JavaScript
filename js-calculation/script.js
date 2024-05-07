const num1 = 20;
const num2 = 10;

let val;

// 산수 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;  // 나머지 연산자

// Math Object
//--------------------------------- 속성
val = Math.E;           // 속성
val = Math.PI;          // 속성
//--------------------------------- 메서드
val = Math.round(2.4);  // 가까운 정수로 리턴
val = Math.ceil(2.4);   // 무조건 올림
val = Math.floor(2.8);  // 무조건 내림
val = Math.abs(-2);     // 절댓값
val = Math.min(2,3,4,5,6,7,8,-1);
val = Math.max(2,3,4,5,6,7,8,-1);
val = Math.random();    // 0~1 사이에서 return.

// 1~20 사이 랜덤 숫자
val = Math.floor(Math.random() * 20 + 1);   //+1 필수.

console.log(val);