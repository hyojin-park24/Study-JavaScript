# Section1. JavaScript기초   
## JavaScript 란?

---

- **런타임에 컴파일되는 동적 약형 프로그래밍 언어**
- 브라우저 웹페이지의 일부로 실행될수도 있고 호스트 환경이라 불리는모든 머신에서 직정 실행될 수 있음
- 웹페이지를 보다 동적으로 만들기 위해 생성됨 : 브라우저 내에서 페이지의 내용을 직접 변경하기 위해 만들어짐 → 최초에는 ‘Live Scirpt’라고 불림
- 어떤 경우에서는 두 번째 요청에 대한 응답 흐름을 건너뛰어 이미 로드된 페이지를 변경하고 거기서 사용자가 작업을 할 수 있게 해줌

## JavaScript 실행방법

---

- JavaScript 코드를 실행하는 모든 환경에 내장된 JavaScript 엔진이 존재함
    - Chrome - VS8 , Firefox - SpiderMonkey
    - 엔진 : 구문 분석 - JavaScript 코드를 분석해 읽고이해함 → 머신 코드로 컴파일링 한 뒤 머신 코드를 실행 함
    Parse Code → Compile to Machine Code → Execute Machine Code
    - 엔진이 컴파일 되지 않은 코드를 실행하기 시작한 후 더 빠른 실행을 시작하기 위해 이미 실행 중인 코드를 컴파일 할 수 있음 → 컴파일된 코드로 동적으로 전환하는등의 작업이 일어남 : JavaScript 엔진 최적화
    - 엔진의 모든 작업은 운영 체제의 단일 스레드로 실행이 됨
    → JavaScript 코드 또한 결국 운영 체제가 처리해야 하는 하나의 작업이고 단일 스레드로 실행이 됨

## JavaScript 동적 약형 언어

---

- **동적 해석형언어** : 미리 컴파일 되지 않음을 의미함 (C++ 같은 경우 개발 중 or 개발 후에 컴파일 됨 : 최종 사용자와 공유하기 전)
→  JavaScript는 전송 중 컴파일링이 되기 때문에 코드가 런타임에 평가되고 실행됨 : 런타임에서 코드가 변경될 수도 있음
(ex. 변수에 text를 저장해 두었을 때, 데이터 유형을 동적으로 전환해서 숫자로 저장할 수있음)

∴ JavaScript 의 ‘동적’ = 런타임에 분석 및 해석이 되어 컴파일이 되기 때문에 특정 작업의 수행이 가능해짐 ‘**수행 중 컴파일링과 해석**’

- **약형** : 데이터 유형을 가정해, 자동으로 유추됨
    - 데이터 유형이 코드 한줄 마다 변경될 수도 있다는 동적 특성과도 관련이 있음
    - 데이터 타입을 지정할 필요가 없음 : 데이터를 저장하기만 하면 어떤 유형이든지 그대로 받아들임
    - **데이터의 유형은 고정되어 있지 않고 바뀔 수 있음**

## Console 객체

---

- IDE 설치
    - VS code
    - WebStorm
- VS code - Live Server 설치
    - 웹 프로젝트를 미리 볼 수 있도록 로컬 서버를 호스팅하는 확장 프로그램
- script.js - console.log
    - 크롬 개발도구(F12) Console 창에 출력됨
    - 개발시 어떠한 식으로 진행되는지 Console로 출력해서 알아보면 용이함
    - 어디서, 어떻게 에러가 났는지 출력을 할때 log사용함

```jsx
console.log('Hello,World');
console.log('1243');
console.log(true);
var greeting = 'hello!';
console.log(greeting);
console.log({a: "a", b: "b"});
console.table({a: "a", b: "b"});

console.error('Error!');
console.warn('Warning!!');

console.time('Hello');
console.time(1);
console.time(2);
console.time(3);
console.time(4);
console.time(5);
console.time(6);
console.time(7);
console.timeEnd('Hello');
```

<img width="960" alt="console" src="https://github.com/user-attachments/assets/8f0d8cd6-54e6-41c9-ad9b-dd905ba1e8b8">

## 변수 선언 : var, let, const

---

- 자바스크립트 코드 작성
    - 브라우저 - 개발도구에서 바로 사용 가능
    - IDE - VSCode 활용
- 변수 선언 방식 / 참조범위 / 호이스팅
    - 호이스팅 : 인터프리터 언어 특성상, 호이스팅이 제공됨 (변수 끌어올려서 사용하는 것)
    
    | 변수 | 중복 | 재할당 | 유효한 참조 범위 (Scope) | 호이스팅
    (변수 끌어올림) |
    | --- | --- | --- | --- | --- |
    | var | O | O | 함수 레벨  | 선언 : undefined 자동 할당 (초기화 전)
    할당 : 값 할당 |
    | let(ES6) | X | O | 블록 레벨 | 선언 : undefined 할당 X (TDZ : Temporal Dead Zone) |
    | const(ES6) | X | X | 블록 레벨 | 선언 : undefined 할당 X (TDZ : Temporal Dead Zone) |
    
    ```jsx
    // var type : 선언 및 할당 여러번 가능 (자유도 높음)
    //          : 유지보수 하기 힘듦.
    var A = 1;
    console.log(A);
    
    var greeting = 'hello';
    console.log(greeting);
    
    var greeting = 'hi';
    console.log(greeting);
    
    greeting = 'how are you?';
    console.log(greeting);
    
    // let type : 중복선언 X, 할당 가능
    
    let ttt = 'hi, halo';
    console.log(ttt);
    
    //let ttt 'haha';    // error.
    
    ttt = 'papapapa';
    console.log(ttt);
    
    // const type : 중복 && 할당 X 
    //            : constant (상수) 약자
    
    const damn = 'yess';
    console.log(damn);
    
    //const damn = 'ttt'; //error.
    
    //damn = 'yesfds';
    //console.log(damn);    //error.
    ```
    
    ```jsx
    //------------- 02. Scope
    //------------- 01) var 함수 레벨 스코프
    function func()
    {   
        if(true)
        {
            var a = 'a';
            console.log(a);    
        }
        console.log(a);
        
    }
    
    func();
    
    //------------- 02) let,const 블록 레벨 스코프
    function func2()
    {   
        if(true)
        {
            let a = 'a_let';
            console.log(a);    
        }   
    }
    
    func2();
    ```
    
    ```jsx
    //------------- 03. 호이스팅 
    //------------- 01) var 호이스팅 : undefined
    //------------- 02) let, const 호이스팅 : error.
    console.log(seelping);
    
    var seelping = '자고싶다';  // undefined
    
    let seelping = '자고싶다';  //error.
    
    //------------- 03) 함수 호이스팅 : 정상출력.
    func3();
    
    function func3()
    {
        console.log('hosting test');
    }
    ```
    

## 자바스크립트 타입

---

- 원시타입 : Boolean, String, Numeric, Null, undefined, Symbol
    - 불변성에 저장됨
    - 고정 크기로 Call Stack에 저장됨
    - 실제 데이터가 변수에 할당됨
- 참조타입 : Object, Array, Class, Functions
    - 실제 데이터는 Heep에 저장됨
    - 데이터 크기가 정해지지 않고 주소값이 Call Stack에 저장됨
- 자바스크립트 = 동적 타입
    - 느슨한 타입
    - 동적 언어
    - 변수는 타입과 연결되지 않음
    - 모든 타입의 값으로 할당(및 재할당) 가능
        - string → boolean → numeric 가능한 것

```jsx
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
```

## 자바스크립트 타입변환

---

- 자바스크립트 함수 사용 변환
    
    ```jsx
    let val;
    
    // Nuber to String
    val = String(111);
    val = String(8 + 4);
    
    // Boolean to String
    val = String(false);
    
    // Date to String
    val = String(new Date());
    
    // Array to String
    val = String([1,2,3,4,5]);
    
    // toString()
    val = (5).toString();
    
    // String to number
    val = Number('1');
    val = Number(true);
    val = Number(false);
    val = Number(null);
    val = Number([1,2,3]);
    // NaN = Not a Number
    
    val = parseInt('111.40');
    val = parseFloat('111.40');
    
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    ```
    
- 자바스크립트 자체에 의해 자동 변환
    
    ```jsx
    const val1 = 2;
    const val2 = String(3);
    const sum = val1 + val2;
    
    console.log(sum);           // string으로 자동변환.
    console.log(typeof sum);
    ```
    

## 자바스크립트 연산 및 Math Object

---

```jsx
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
```

## Template Literals

---

- Temlate Literals : javascript에서 backtick() 문자를 사용하여 문자열을 표현한 템플릿
    - 쉬운 줄바꿈
        - ‘\n’ → 실제 Enter 적용
    - 문자열 내부에 표현식을 포함할 수 있음
        - ‘+{a+b}+’ → 보간법 ${a+b}
    - 백틱(backtick) ⇒ ‘ ` '로 사용
    

## Loops

---

| for | 코드 블록을 여러 번 반복 |
| --- | --- |
| for/in | 객체의 속성을 따라 반복 |
| while | 지정된 조건이 true 인 동안 코드 블록을 반복 |
| do/while | while 루프의 변형
조건이 true인지 검사하기 전에, 코드 블록 한 번 실행
후 조건이 true인 동안 루프 반복 |
- for vs forEach
    
    
    | for | forEach |
    | --- | --- |
    | 원래 사용되었던 접근 방식 | 배열 요소를 반복하는 새로운 
    접근 방식 |
    | breack 사용 가능 | breack 사용 불가능 |
    | 빠름 | for보다 느림 |
    | 비동기 await 작동 | 비동기 await 작동 애매함 |

```jsx
// for문
for(let i=0; i < 10; i++){
    if(i === 3){
        console.log('It is 3');
        continue;
    }

    if(i === 5){
        console.log('5 Stop the loop.');
        break;
    }
    console.log('Number ' + i);
}

// for/in 문
const user = {
    name: 'Edun',
    province: '부산광역시',
    city: '남구'
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

// while 문
let i = 0;

while(i < 10){
    console.log('Numer ' + i);
    i++;
}

// do/while 문
let i = 0;

do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);

//배열을 Loop로 이용해서 컨트롤 해주기
const locations = ['서울', '부산', '경기도', '대구'];

for(let i = 0; i < locations.length; i++){
    console.log(locations[i]);
}

locations.forEach(function (location, index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
});

// console.log(locations);
```
