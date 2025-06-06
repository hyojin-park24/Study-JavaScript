# Section1. JavaScript기초   
#### 🛞2024.04 ~ 계속 업데이트 중 ... ing (기존 내용에서 심화 내용 한스쿱씩 추가됨)   

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

# Section2. Window객체 및 DOM
---

- CRP에서 자바스크립트 파일은 따로 랜더링 안하는지? 안함
- const liOdd = document.querySelectorAll('li:nth-child(odd)')에서 nth-child(odd)가 홀수인건 어떻게 알 수 있는 것인지?
    - CSS 클래스의 속성값
    - nth-child(odd) 또는 nth-child(2n+1) : HTML 표의 홀수번째 행
    - nth-child(even) 또는 nth-child(2n) : HTML 표의 짝수번째 행
    - nth-child(7) : 임의의 7번째 요소를 나타냄
- vscode 에서는 liveServer을 사용해서 로컬 서버를 호스팅함
- intelliJ 에서는 바로 실행 가능함 → 원리 궁금
</aside>

## Window Object

---

- 브라우저에서 JS 코드 실행 가능 이유 : JS엔진이 개발자 도구 안에 들어있기 때문
- 브라우저에 의해 자동으로 생성됨
    - JS 객체가 아님
- Window Object = 웹 브라우저의 창(window)를 나타냄
- window 객체를 이용해서 얻을 수 있는 것
    1. 브라우저의 창에 대한 정보를 알 수 있음
    2. 이 창을 제어할 수 있음
    3. var 키워드 변수를 선언하거나 함수를 선언하면
    이 window 객체의 프로퍼티가 됨
    
    <img width="960" alt="windowObject" src="https://github.com/user-attachments/assets/5f9f923b-0be4-43e1-b1f6-65e073b50779">
    
    <img width="193" alt="var_windowObject" src="https://github.com/user-attachments/assets/2c442e59-46fb-422e-9618-cdbb11cfae66">
    
    ```jsx
    let val;
    
    val = window.outerHeight;
    val = window.outerWidth;
    
    val = window.outerWidth;
    val = window.innerWidth;
    
    val = window.scrollY;
    val = window.scrollX;
    
    // Location Object : 현재 url 정보
    val = window.location;      //url 정보
    val = window.location.hostname;
    val = window.location.port;
    val = window.location.href;
    //window.location.href = 'http://google.com/' //url 이동
    val = window.location.search;
    
    //window.location.reload();
    
    // History Object : 사용자가 방문한 url 정보
    window.history.go(-2);
    val = window.history.length;
    
    // Navigator Object : 브라우저에 대한 정보
    val = window.navigator;
    val = window.navigator.userAgent;
    val = window.navigator.language;
    console.log(val);
    ```
    

## DOM 이란?

---

- HTML → 브라우저 UI로 보이는 단계
    - HTML 코드의 각 요소(Element) → 분석 → UI
        - <h1> 요소, <li>요소, <ul> 요소 등
- DOM(Document Object Model) 이란?
    - HTML 코드의 각 요소 → DOM Tree로 분석 → UI
    - 돔(문서 객체 모델)은 메모리에 웹 페이지 문서 구조를 트리구조로 표현해서 웹 브라우저가 HTML 페이지를 인식하게 해줌
    - 웹 페이지를 이루는 요소들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미함
- DOM 조작
    - HTML의 Element = Node
        - DOM에서 API를 이용해서 Node에 접근하거나 Node를 Update 할 수 있음 ⇒ DOM 조작 가능!
        Ex) JS코드로 노드에 접근해서 버튼 색상 변경

<img width="533" alt="domTree" src="https://github.com/user-attachments/assets/3208163a-2633-40e9-ac7d-7b06374a6f86">   

- 웹페이지 빌드 과정 (Critical Rendering Path (CRP))
    - HTML 파일 → DOM
    - CSS 파일 → CSSOM
    - DOM + CSSOM = Render Tree
    - Render Tree → Layout → Paint
        - Render Tree
        : DOM과 CSSOM을 결합하는 곳
        이 프로세스는 화면에 보이는 모든 콘텐츠와 스타일 정보를 모두 포함하는 최종 렌더링 트리를 출력함. ⇒ 화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함.
        - Layout(reflow)
        : 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산하는 단계
        - Paint
        : 실체 화면 그리기
    - CRP과정이 너무 많아지면 발생하는 문제
        - DOM을 조작할때마다 CRP가 진행됨
        - DOM 객체로 만들어 주는 부분은 성능에 많은 문제 없음
        - Render Tree → Layout → Paint 과정은 비용이 많이 듦
        
        ∴ Render Tree → Layout → Paint 이 과정을 최소화 하는 것이 관건!
        
    
    <img width="528" alt="crp" src="https://github.com/user-attachments/assets/3a9fb267-8e8a-4b0f-bd66-ff5f5e3c87ea">   
    

## Document Object 이용해보기

---

- window.document
    - window 객체 : 창(window)에 대한 정보
    - window.document 객체 : window 내 컨텐츠 정보
    
    <img width="481" alt="document" src="https://github.com/user-attachments/assets/556e0a68-99f8-4696-8117-0d13f3f3187b">
    

```jsx
let val;

val = document;

val = document.baseURI  // 웹 페이지의 절대 URL 반환 //
val = document.head;    // <h> 반환
val = document.body;    // <body> 반환

val = document.forms;   // <form> 반환
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts; // <script> 반환
val = document.scripts[2].getAttribute('src');

console.log(val);
```

- DOM 조작
    - 요소 접근 후에 조작 가능
    - 요소 접근 방법
        - 단일 요소 접근
            - document.getElementById(요소id)
            - document.getElementByName(name속성값)
            - document.querySelector(선택자)
        - 다중 요소 접근
            - document.getElementsByTagName(태그이름)
            - document.getElementsByClassName(클래스이름)
            - document.querySelectorAll(선택자)
- querySelector 종류
    - document.querySelector(태크이름)
    - document.querySelector(.클래스 이름)
    - document.querySelector(#id 이름)
    
    ```jsx
    //------------------------------------------------ 1) 단일 요소 접근
    const headerContainer = document.getElementById('header-container');
    // const headerContainer = document.querySelector('#header-container');    // id
    // const headerContainer = document.getElementById('.header-container');   // class
    // headerContainer.style.display = 'none';
    
    // console.log(headerContainer);
    
    headerContainer.textContent = 'Text Contene';
    headerContainer.innerText = 'Inner Text';
    headerContainer.innerHTML = '<span>Inner HTML</span>'
    
    //---------------------------------------------- 2) 다중 요소 접근
    const items = document.getElementsByClassName('list-group-item');
    
    items[0].style.color = 'blue';
    items[3].textContent = 'Hi Hi Hi';
    
    let lists = document.getElementsByTagName('li');
    // console.log(lists);
    // lists.forEach((list) => {
    //     console.log(list)
    // });
    //---> collection인 lists를 배열로 변경
    lists = Array.from(lists);
    console.log(lists);
    
    //---> 배열에서 사용할 수 있는 메소드
    //lists.forEach();
    lists.forEach((list, index) => {
        //console.log(list)
        list.textContent = `${index}. List`
    });
    
    const liOdd = document.querySelectorAll('li:nth-child(odd)');
    liOdd.forEach ((li) => {
        li.style.background = 'gray';
    })
    ```
    

## DOM 탐색하기(1)

---

- DOM Navigaion
- DOM을 이용하면 요소와 요소의 콘텐츠에 무엇이든 할 수 있음
    - DOM 객체에 접근하는 것이 선행 되어야
- Node 와 Elment
    - Node의 계층 구조
        
        ![image](https://github.com/user-attachments/assets/9f5e1f96-6bad-48e5-b7e5-9500b72a954a)
        
    
    - Node Type
        
        
        | 유형 | 리턴 상수 값 | 설명 |
        | --- | --- | --- |
        | Node.ELEMENT_NODE | 1 | <div></div>, <p></p> |
        | Node.TEXT_NODE | 3 | text |
        | Node.CDATA_SECTION_NODE | 4 | <!CDATA[[…]] > |
        | Node.PROCESSING_INSTRUCTION_NODE | 7 | <?xml-stylesheet… ?> |
        | Noode.COMMENT_NODE | 8 | <!— comment —> 주석 |
        | Node.DOCUMENT_NODE | 9 | document |
        | Node.DOCUMENT_TYPE_NODE | 10 | DocumentType node <!DOCTYPE html> |
        | Node.DOCUMENT_FRAGMENT_NODE | 11 | DocumnetFragment node |
    - Element
        - node의 한종류
        - <html>, <head>, <title>, <body>, <h2>, <p> , <br/> 등
    - 자식 노드
        - 바로 아래의 자식 요소를 나타냄
    - 후손 노드
        - 중첩 관계에 있는 모든 요소를 의미함
        - 자식 노드와 그 보다 자식 노드 모두가 후손 노드가 됨
    - 모든 노드(Node Type)에 적용 가능한 탐색 프로퍼티
        - parentNode, childNodes, firstChild, lastChild, previousSibling, nexSibling
    - 요소 노드(Elemnet Node Type)에만 적용 가능한 탐색 프로퍼티
        - parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
- Dom Collection
    - childNdoes는 배열이 아닌 반복 가능한(iterable) 유사 배열 객체인 컬렉션(collection)이다
    - 배열이 아니기 때문에 배열 메서드 사용 불가능
    Ex) map, filter
    - for..of 사용 가능 (for..in은 사용X), forEach(), for…of 도 사용 가능
        - for…of : 배열을 순환할 때 사용
        - for…in : 객체를 순환할 때 사용
        

```jsx
let val;

// 선택자
const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

// text 반환 : 마크업의 공백을 나타내기 위해 문서에 노드삽입

val = list.childNodes;  // NodeList 반환, line break(text)로 포함됨
val = list.childNodes[0];   // text 반환
val = list.childNodes[0].nodeName;  // text
val = list.childNodes[3];
val = list.childNodes[3].nodeType;  // 1 (Element)

// NodeType
// 1 - Element : 요소
// 2 - Attribute (deprecated) : 속성
// 3 - Text node
// 8 - Comment node : 주석
// 9 - Document itself : document 자체
// 10 - Doctype

// children element nodes 반환
val = list.children;    //HTML Collection 반환(line break 포함 X)
val = list.children[1];
val = list.children[1].textContent = 'Hhh';

// First child
val = list.firstChild;  // list.firstChild === list.childNodes[0];
val = list.firstElementChild;

// Last child
val = list.lastChild;   //list.lastChild === list.childNodes[list.childNodes.length -1];
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

//parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentNode.parentNode;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;             // text : 들여쓰기
val = listItem.previousElementSibling;      //null : first list item.
console.log('val', val);

// collection
//console.log(list.childNodes.filter);    // childNodes 는 컬렉션이지 배열이 아니기 때문에, undefined
//console.log(list.childNodes.map);       // childNodes 는 컬렉션이지 배열이 아니기 때문에, undefined

for (let node of list.childNodes){
    console.log(node);
}

// collection 을 배열로 만들기
console.log(Array.from(list.childNodes).filter);

```

![dom_nagivationpng](https://github.com/user-attachments/assets/ee7343e6-e488-4a44-bc1c-1b43dbc34434)

## CreateElement

---

- HTML이 아닌, JavaScript로 요소 생성하기
- `document.createElement()`
- `*document*.querySelector('ul.list-group').appendChild(*li*)`

```jsx
// list 요소를 하나 더 생성하기.

// element 생성
const li = document.createElement('li');
const newLi = document.createElement('li');

// add class
li.className = 'list-group-item';
newLi.className = 'list-group-item 3';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('name','New list item');

// link element 생성하기
const link = document.createElement('a');
link.className = 'alarm-item';

// html bootstrap icon 추가 : html 에서 icon 지원 링크 태그문 추가 필요.
//link.innerHTML = '<i class="bi-alarm"></i>'

link.innerText = 'hi';
li.appendChild(link);

// test text
newLi.innerText = 'ohhhh';

// 생성한 li 요소를 ul 태그에 추가
// ul 태그에 접근
document.querySelector('ul.list-group').appendChild(li);
document.querySelector('ul.list-group').appendChild(newLi);

//console.log('list', li);
```

## removeChild & replaceChild

노드 삭제 및 노드 교

---

- `parentNode.removeChild(node)`
- `parentNode.replaceChild(newChild, oldChild)`

```jsx
// 첫번째 자식 노드 삭제
// 부모 노드 접근
const listParent = document.querySelector('ul');
// 자식 노드 접근
const list = document.querySelectorAll('li');

// 요소 지우기
//listParent.removeChild(list[0]);

// 요소 교체하기
const oldElement = document.getElementById('A');
const newElement = document.createElement('span');

newElement.textContent = 'Hi';

//oldElement.parentNode.replaceChild(newElement, oldElement);
listParent.replaceChild(newElement, oldElement);
```

# Section3. Event

## Event Listener & Event 객체

---

- Dom Event
    - application 에서 적용되는 버튼 이벤트에 대한 액션 원리
    - Event Listener
        - 이벤트 함수 영역
        : 이벤트가 발생했을 때 어떠한 액션을 위한 함수
    - addEventListener()
        - Javascript에서 이벤트 리스너를 호출하기 위해서, 이벤트 리스너를 해당 객체나 요소에 등록해주는 것
    
    ① 자바스크립트 코드에서 프로퍼티로 등록
    
    ```jsx
    // document 가 load 됐을 때,
    window.onload = function (){
        // 문서가 load 될 때 이 함수를 실행
        // : 아이디가 'text' 인 요소를 return
        let text = document.getElementById('text');
    
        // text 요소에 innerText 추가
        // : 기존 text 요소의 innerText 가 변경됨
        text.innerText = 'Loaded HTML document';
    }
    ```
    
    ② HTML 태그에 속성으로 등록
    
    ```jsx
    <button onclick="alert('clicked this button!!')" class="btn">버튼</button>
    ```
    
    ③ addEventListener 메소드를 사용
    
    ```jsx
    const aElemnet = document.querySelector('a');
    
    aElemnet.addEventListener('click', () => {
        alert('a element clicked');
    })
    ```
    
    - Event 객체
        - 이벤트가 발생할 때 일어나는 이벤트 객체
    
    ```jsx
    const buttonElement = document.querySelector('.btn2');
    
    buttonElement.addEventListener('click', (event) => {
        let val;
        val = event.target;
        val = event.target.id;
        val = event.target.className;
        val = event.target.classList;
    
        val = event.type;
        val = event.clientY;    // window 로부터의 거리 좌표
        val = event.offsetY;    // 요소로부터의 거리 좌표
        console.log(val);
    })
    ```
    
    ## Event 의 종류
    
    ---
    
    1. UI 이벤트
        
        
        | load | 문서나 객체가 로드 완료 되었을 때 발생 |
        | --- | --- |
        | change | 객체의 내용이 변동되거나 focus를 읽었을 때 발생 |
        | resize | 객체의 크기가 바뀌었을 때 발생 |
        | scroll | 스크롤바 조작할 때 발생 |
        | error | 에러가 발생했을 때 발생 |
    2. 키보드 이벤트
        
        
        | keydown | 키를 눌렀을 때 발생 |  |
        | --- | --- | --- |
        | keyup | 키를 눌렀다가 뗐을 때 발생 |  |
        | keypress | 사용자가 눌렀던 키의 문자가 입력 되었을 때 발생 | * submit 이벤트에서 preventDefault() 미사용시 keypress 이벤트는 적용이 안됨 → 값이 입력이 되어야만발생하는 이벤트이기 때문  |
    3. 마우스 이벤트
        
        
        | click | 객체를 클릭했을 때 발생 |
        | --- | --- |
        | dbClick | 객체를 더블클릭했을 때 발생 |
        | mousedown | 마우스를 클릭했을 때 발생 |
        | mouseout | 마우스가 특정 객체 밖으로 나갔을 때 발생 |
        | mouseover | 마우스가 특정 객체 위로 올려졌을 때 발생 |
        | mousemove | 마우스가 움직였을 대 발생  |
        | mouseup | 마우스에서 손을 뗏을 때 발생 |
    4. 포커스 이벤트
        
        
        | focus | 객체가 focus가 되었을 때 발생 |
        | --- | --- |
        | blur | 객체가 focus를 읽었을 때 발생 |
    5. 폼 이벤트
        
        
        | input | input, textarea 요소 값이 변경되었을 때 발생 |  |
        | --- | --- | --- |
        | chage | 선택 상자, 체크박스, 라디오 버튼의 상태가 변경되었을 때 발생 |  |
        | select | 텍스트를 선택 했을 때 발생 |  |
        | reset | 리셋 버튼을 눌렀을 때 발생 |  |
        | submit | 사용자가 버튼키 등을 활용하여 폼을 전송할 때 발생 | * 지정된 이벤트가 없을 때 기본적으로 unsubmit (refresh) 이벤트가 발생됨 → e.preventDefault()로 막을 수 있음 |
        | cut/copy/paste | 사용자가 폼필드의 콘텐츠를 잘라내기/복사/붙여 넣기 했을 때 발생 |  |
- mosuedown vs click
    - 어떠한 요소를 클릭했을 때 먼저 mousedown 이벤트가 발생하고 마우스를 놓았을 때 click 이벤트가 발생함
    - mosedown > mouseup > click

```jsx
// event 종류 알아보기

const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('form');
// const title = document.querySelector('h2');
//
// // mouse event
submitBtn.addEventListener('click',handleEvent);
submitBtn.addEventListener('dblclick',handleEvent);
submitBtn.addEventListener('mousedown',handleEvent);
submitBtn.addEventListener('mouseup',handleEvent);
submitBtn.addEventListener('mouseenter',handleEvent);
submitBtn.addEventListener('mouseleave',handleEvent);
submitBtn.addEventListener('mousemove',handleEvent);

// form event
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

form.addEventListener('submit', handleEvent);
emailInput.addEventListener('keydown', handleEvent);
emailInput.addEventListener('keyup', handleEvent);
emailInput.addEventListener('keypress', handleEvent);
emailInput.addEventListener('focus', handleEvent);
emailInput.addEventListener('blur', handleEvent);
emailInput.addEventListener('cut', handleEvent);
emailInput.addEventListener('paste', handleEvent);
emailInput.addEventListener('input', handleEvent);

function handleEvent(e) {

    if (e.type ==='submit') {
        e.preventDefault();
    }

    console.log('Event Type :'+ e.type);
    // title.textContent = 'MouseX :'+ e.offsetX + ', MouseY :'+ e.offsetY;
    title.textContent = e.target.value;
}
```

## JS Event Bubbling

---

- 이벤트 버블링이란?
    - 깊게 중첩된 요소에 이벤트가 발생했을 때 이벤트가 위로 전달 되는 것을 의미
    
    <img width="462" alt="event_bubbling1" src="https://github.com/user-attachments/assets/974e2a7c-b57e-4652-957a-fae9b0d12649">
    
    ![event_bubbling2](https://github.com/user-attachments/assets/3600dca3-8215-437d-b1cd-0b9e0b03ef8c)
    
    - 이벤트 버블링 취소 
    
    `onclick="*event*.stopPropagation()"`

![event_bubbling](https://github.com/user-attachments/assets/58735bb0-af76-4969-bf74-78b60ff9ffa4)

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling</title>
    <style>
        body * {
            margin: 10px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form onclick="alert('form')"> Form
        <div onclick="alert('div')"> Div
            <p onclick="event.stopPropagation()">P</p>
        </div>
    </form>
<!--    <script>-->
<!--        const form = document.querySelector('form');-->
<!--        const div = document.querySelector('div');-->
<!--        const p = document.querySelector('p');-->

<!--        form.onclick = function(event){-->
<!--            // event.target : 실제 이벤트가 시작된 '타켓' 요소.-->
<!--            // this(event.currentTarget) : 핸들러가 할당된 요소.-->
<!--            event.target.style.backgroundColor ='yellow'-->

<!--            setTimeout(() => {-->
<!--                alert('target = ' + event.target.tagName + ', this = ' + this.tagName);-->
<!--                event.target.style.backgroundColor = '';-->
<!--            }, 0);-->
<!--        };-->
<!--    </script>-->
</body>
</html>
```

## JS Event Capturing

---

- 이벤트 캡처링이란?
    - 이벤트 버블링과 다르게 제일 상단에 있는 요소에서 아래로 이벤트가 내려오는 것
    
    ![JavaScript-event-capturing](https://github.com/user-attachments/assets/5a865d17-032b-493e-8a8a-21fe24a3a4ef)
    
- 이벤트의 3단계 흐름
    1. 캡처링 단계 : 이벤트가 하위 요소로 전파되는 단계
    2. 타킷 단계 : 이벤트가 실제 타깃 요소에 전달되는 단계
    3. 버블링 단계 : 이벤트가 상위 요소로 전파되는 단계
    
    ![event%EB%8B%A8%EA%B3%84](https://github.com/user-attachments/assets/2b62b228-1715-4e86-a5e8-af1fc1c80116)
    
- 캡처링의 흐름을 확인하려면?
    - addEventListener의 capture 옵션 : true 로 설정해야 함
    
    ![EventCapturing-Chrome2024-06-2816-24-25-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/61de062f-2a91-4715-b0c5-f23a6e6ed533)
    

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Capturing</title>
    <style>
        body * {
            margin: 10px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form> Form
        <div> Div
            <p>P</p>
        </div>
    </form>
    <script>
        for (let element of document.querySelectorAll('*')){
            element.addEventListener('click', e => alert("캡처링 : " + element.tagName), true);
            element.addEventListener('click', e => alert("버블링 : " + element.tagName));
        }
    </script>
</body>
</html>
```

## JS Event Delegation

---

- Event Delegation  이벤트 위임
    - ‘하위 요소의 이벤트’ 를 ‘상위 요소’에 위임하는 것 
    → 하위요소의 이벤트를 상위에서 제어 함

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation</title>
    <style>
        body * {
            margin: 10px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div id="buttons">
        <button class="buttonClass">
            Click Me!
        </button>
        <button class="buttonClass">
            Click Me!
        </button>
    </div>
    <script>
        ///const buttons = document.getElementsByClassName('buttonClass');

        // Don't use new button classes because they are could not access parent node.
        // for (const button of buttons) {
        //     button.addEventListener('click', () => alert('Clicked'));
        // }

        // javascript creation for the buttons
        const buttonList = document.querySelector('#buttons');
        buttons.addEventListener('click', () => alert('Clicked'));
        const button = document.createElement('button');
        button.setAttribute('class', 'buttonClass');
        button.innerText = 'Click Me!';
        buttonList.appendChild(button);
    </script>
</body>
</html>
```
# Section4. 자바스크립트 중급

## 자바스크립트 this 키워드

---

- this ⇒ 해당 객체를 가리킨다(참조한다)
- 선언이 아닌 호출에 따라 달라짐

<aside>
💡 객체 안에 함수가 있으면 그 함수 = 메서드

</aside>

- Method 안에서의 this ⇒ 해당 객체를 가리킴

```jsx
//Method => Object
//play & stop method
const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}

audio.play();

audio.stop = function() {
    console.log('stop this', this);
}

audio.stop();
```

- Function 에서의 this ⇒ Window 객체를 가리킴

```jsx
// Function => Window Object
function playAudio() {
    console.log(this)
}
```

- Constructor Function(생성자 함) 에서의 this ⇒ {} : 빈 객체를 가리킴

```jsx
// Constructor => {}
function Audio(title){
    this.title = title;
    console.log(this)
}

const audio = new Audio('a');

const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hip hop'],
    displayCategories() {
        this.categories.forEach(function(category) {
            console.log(`title: ${this.title}, category: ${category}`);
        }, this);
    }
}

audio.displayCategories();
// window object 에 title 속성이 없어서 undefined 나옴 .
```

- Lexical this (화살표 함수에서의 this) ⇒ 항상 상위스코프의 this 를 가리키게 됨

```jsx
// 화살표 함수 ===> this 는 항상 상위스코프의 this 를 가리키게 됨.
// Lexical this
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hip hop'],
    displayCategories() {
       this.categories.forEach((category) => {
           console.log(this)
       })
    }
}

audio.displayCategories();
```

## bind, call, apply

---

- call, apply, bind : 함수 호출방법을 지정해서 인자를 this로 만들어 줌
→ 메소드 함수에서 ‘this’를 명시적으로  바인딩 할 때 사용함
- call, apply 공통점: 함수를 호출해서 인수 전달
- call, apply 차이점: 리스트 형식(,) , 배열 형식([])
- bind : 함수를 호출하지 않고 함수와 this 값을 유지하는 새로운 함수 생성
- call() 메서드
    - 함수를 호출하는 함수
    - 첫 번째 매개변수로 어떠한 것을 전달해주면 호출되는 함수의 this 안에 wondow 객체가 아닌 전달받은 것을 받게 됨

```jsx
// call();
//01. 객체 안의 함수에서 call() 메서드를 활용 -----------------------------//
var originPerson = {
    firstName: 'John',
    lastName: 'Smith',
    fullName : function(){
        return (this.firstName +', ' + this.lastName);
    }

}
const person1 = {
    firstName: 'Edun',
    lastName: 'Habin',
};

//fullName.call(person1);

console.log(originPerson.fullName());               // John, Smith
console.log(originPerson.fullName.call(person1));   // Edun, Habin

//02. 함수에서 call() 메서드 활용  ------------------------------------//
const fullName = function(){
    console.log(this.firstName +', ' + this.lastName);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
};

fullName.call(person1);

//03. 함수에서 call() 메서드 인수 활용 --------------------------------//
const fullName = function(city, country){
    console.log(this.firstName +'' + this.lastName, city, country);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
};

fullName.apply(person1, 'London', 'UK');
```

- apply() 메서드
    - call()과 비슷하지만 인자를 배열로받음

```jsx
// Apply();
const fullName = function(city, country){
    console.log(this.firstName +'' + this.lastName, city, country);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
};

fullName.apply(person1, ['London', 'UK']);
```

- bind() 메서드
    - call()과 apply()메서드와 다르게 함수를 즉시 실행하지 않고, '새로운 함수'를 반환함

```jsx
// Bind();
function func(language){
    if(language === "kor"){
        console.log(`language: ${this.korGreeting}`);
    }
    else{
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: '안녕',
    engGreeting: 'Hello'
}

//func.bind(greeting);    //-> func 직접 실행 x : greeting 바인딩만 시켜줌.
// const boundFunc = func.bind(greeting);
// boundFunc('kor');
const boundFuncKor = func.bind(greeting)('kor');
```

## 조건부 삼항 연산자

---

- Conditional Operator

```jsx
if (a) {
   a = "a";
} else{
   a = "b";
}

//if문을 한줄로 작성--------//

a ? a = "a" : a = "b"
```

## Event Loop

---

- JavaScript의 동기와 비동기
    - JavaScript 는 동기 언어 
    ∴ JavaScript의 비동기 처리는 WebAPIs 를 통해 처리 됨

```jsx
// 동기와 비동기
console.log('1');  // 동기

setTimeOut(() => {
	console.log('2');
}, 3000);          // 비동기

console.log('3);
```

- 동기 (Synchronous, 시간 맞춤)
    - 대학생 졸업 과정 : 1학년 → 2학년 → 3학년 → 4학년 (단계별)
- 비동기 (Asynchronous, 시간을 맞추지 않음)
    - 취업하는 과정 :  토익 공부 & 자격증 공부 & 면접 준비 (동시다발)
- JavaScript의 비동기 처리
    - 브라우저에서 사용되는 브라우저 API를 사용함 (window object)
    - Node 에서는 Node API를 사용함 (global object)
    - JS 인진 : 메모리 힙 + 호출 스텍(Call Stack)
    - 비동기 내부 처리 Call Stack 작동
        - JS 엔진 → Web APIs → Callback Queue → Event Loop
        - 브라우저 : JS 엔진 & Web API 모듈 & Callback Queue & Event Loop
        - 비동기 작업 : Web API 모듈에서 처리함 (Call Stack에서 Web API로 이동되어 처리됨)
        - 비동기 함수의 시간이 지나서 완료되면 Callback Queue 로함수가 돌아옴 →  Callback Queue 에는 Web API 의 콜백 함수들이 대기하게 됨
        - Event Loop : Call Stack과 Callback Queue 를 계속 주시하다가 Call Stack이 비게 되면 먼저 들어온 순서대로 Callback Queue 에 있는 함수들을 Call Stack 로 넣어줌

[JELoop Visualizer](https://kamronbekshodmonov.github.io/JELoop-Visualizer/)

- setTimeOut() 메서드
    - 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정함
    - 두 번째 메개변수로 들어간 리리초 단위가 지난 후 첫 번째 메개변수인 콜백 함수가 호출 됨
    - setTimeOut() 이 0초면 즉시 실행이 될까?
        - 0초 이후에 함수가 호출되는걸 보장함
        - 0초 이후에 즉시 실행되는건 아님.
- 재귀 함수의 Call Stack : CallStack Size Exceeded

```jsx
// stack over flow

function foo() {
		foo();
}
foo();             // Uncaught RangeError : Maximum call stack size exceeded
```

## Closure

---

1. 클로저(Closure )의 개념
    - 함수가 선언된 렉시컬 환경과 함께 기억되어, 외부 함수의 변수 및 범위에 접근할 수 있는 함수
        - 렉시컬 환경
            - 변수가 어디에서 선언되었는지를 기준으로 변수의 유효 범위와 접근 가능성을 정의하는 개념
            - 코드가 작성된 위치(렉시컬 스코프)에 따라 변수를 바인딩하고, 함수가 선언된 위치에 따라 해당 함수 내부에서 접근할 수 있는 변수를 결정
        - 렉시컬 스코프 : 코드가 작성된 위치
    - 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있음
    - **자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수**
    - 외부함수가 이미 반환되었어도 외부함수 내의 변수는 이를 필요로 하는 내부함수가 하나 이상 존재하는 경우 계속 유지됨
    → 이때 내부함수가 외부함수에 있는 변수의 복사본이 아니라 실제 변수에 접근한다는 것에 주의
    - 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 엑세스 할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스 할 수 있음!
2. 클로저(Closure) 이해하기
    
    ![20240720_004942](https://github.com/user-attachments/assets/e3cbf841-c3a8-454a-bfdb-25a1b072e93d)
    
    ```jsx
    let a = 'a';
    
    function functionA(){
        let b = 'b';
        function functionB() {
            let c = 'c';
            console.log(a, b, c);
        }
        functionB();
        console.log(a, b);
    }
    
    functionA();
    ```
    
    ```jsx
    function outerfunction(outerValiable)
    {
        return function innerfunction(innerValiable){
            console.log('Outer Value: ' + outerValiable);
            console.log('Inner Value: ' + innerValiable);
        }
    }
    
    const newFunction = outerfunction('outside');       // outerfunction이 즉시 실행되면서 newFunction에는 innerfunction이 반환됨
    newFunction('inside');                              // newFunction이 호출되면서 console에는 outside와 inside 두개 다 찍힘 (내부함수에서 외부함수 변수에 접근한 것)
    ```
    
3. 클로저(Closure) 활용 예시
    1. 상태유지
    
    ![스크린샷 2024-07-20 010058.png](%25EC%258A%25A4%25ED%2581%25AC%25EB%25A6%25B0%25EC%2583%25B7_2024-07-20_010058.png)
    
4. 참고 사이트

[PoiemaWeb](https://poiemaweb.com/js-closure)

## JS **Destructuring assignment (구조분해할당 )**

---

- 구조 분해 할당이란? (ES6)
    - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
    - Clean Coding 을 위함
- 배열 구조 분해
    
    ```jsx
    var a, b, rest;
    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20
    
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50]
    
    ({ a, b } = { a: 10, b: 20 });
    console.log(a); // 10
    console.log(b); // 20
    
    // Stage 4(finished) proposal
    ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // {c: 30, d: 40}
    ```
    
- 객체 구조 분해
    
    ```jsx
    let obj = {
        accessory: 'horn',
        animal: 'hors',
        color: 'purple',
        hairType: 'curly'
    }
    
    function buildAnimal(animalData){
        let accessory = animalData.accessory,
            animal = animalData.animal,
            color = animalData.color,
            hairType = animalData.hairType;
    
        console.log(`Accessory: ${accessory}, Animal: ${animal}, Color: ${color}, Hair Type: ${hairType}`);
    }
    buildAnimal(obj);
    ```
    
    ```jsx
    // 깊게 들어간 객체 구조 분해 할당
    
    let person = {
        name: 'Edun',
        age: 30,
        phone : '123',
        address: {
            zipcode: 1234,
            street : 'rainbow',
            number: 43
        }
    }
    
    let {address: {zipcode, street, number}} = person;
    
    console.log(zipcode, street, number);
    ```
    
- 중첩된 객체 및 배열의 구조 분해
    
    ```jsx
    // metadata 객체 생성
    var metadata = {
        title: "Scratchpad",
        translations : [
            {
                locale: "de",
                localization_tags: [],
                last_edit : "2024-08-14T-4:44:37",
                url:"/de/docs/Tools/Scratchpad",
                title: "JavaScript-Umgebung"
            },
        ],
        url:"/ko/docs/Tools/Scratchpad",
    };
    
    // 구조분해 할당
    var {
        title:englishTitle,     //englishTitle 이라는 새로운 변수를 생성 → metadata title 값을 할당.
        translations: [{title: localizedTitle}],    //localizedTitle 라는 새로운 변수를 생성 → metadata translations 의 title 값을 할당.
    } = metadata;
    
    console.log(englishTitle, localizedTitle); // "Scratchpad", "JavaScript-Umgebung"
    ```
    

## 전개 연산자(Spread Operator)

---

- ES6 문법에서 새로 추가 됨
- 특정 객체나배열의 값을 다른 객체나 배열로 복제하거나 옮길 때 사용
- 연산자 모양 : “…”
- 배열 원본 자체에 영향을 주지 않음 = 기존 배열을 보존
- 배열 조합
    
    ```jsx
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [7,8,9];
    
    //const arrWrap = arr1.concat(arr2,arr3); // concat 조합 함수
     
    const arrWrap = [...arr1, ...arr2, ...arr3]; //전개 연산자
    console.log(arrWrap);
    
    const arr1 = [1,2,3];
    const arr2 = [4,5];
    
    //Array.prototype.push.apply(arr1, arr2); // push 메서드 : 배열 끝에 여러 값을 추가
    
    arr1.push(...arr2); //전개 연산자
    
    console.log(arr1)
    ```
    
- 객체 조합
    
    ```jsx
    const obj1 = {
        a: 'A',
        b: 'B'
    };
    const obj2 = {
        c: 'C',
        d : 'D'
    };
    
    //const objWrap = {obj1, obj2}; // 객체 자체가 들어감.
    const objWrap = {...obj1, ...obh2}; // 객체 자체가아닌 각각의 값이 할당됨. 
    console.log(objWrap);
    ```
    
- 기존 배열 보존
    
    ```jsx
    const arr1 = [1,2,3];
    const arr2 = arr1.reverse();
    console.log(arr1, arr2); // [3,2,1], [3,2,1] : 원본 배열까지 역순으로 변경됨
    
    const arr1 = [1,2,3];
    const arr2 = [...arr1].reverse();
    
    console.log(arr1,arr2); // [1,2,3], [3,2,1] : 원본 배열 유지
    ```
    

## Map, Filter, Reduce

---

- map() 메서드
 : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함
    - [arr.map](http://arr.map) (callback (currentValue[, index[, array]])[, thisArg])
        - callback : 새로운 배열 요소를 생성하는 함수 (세가지 인수)
        - currentValue : 처리할 현재 요소
        - index : 처리할 현재 요소의 인덱스 (Optional)
        - array : map() 을 호출한 배열 (Optional)
        - thisArg : callback 을 실행할 때 this로 사용되는 값 (Optinal)
    
    ```jsx
    const arr1 = [1, 4, 9, 16];
    
    const map1 = arr1.map((x) => x*2);  //화살표 함수 활용
    var doubles = array1.map(function (num) {
      return num * 2;
    }); // 일반 함수 활용
    
    console.log(map1, doubles); // > Array [2, 8, 18, 32]
                                // > Array [2, 8, 18, 32]
    ```
    
- filter() 메서드
: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환함
    - arr.filter(callback(elemnet[, index[, array]]),[, thisArg])
        - callback : 배열의 각 요소에 대해 실행할 함수
        - element: 현재 처리 중인요소
        - index : 현재 처리 중인 요소의 인덱스
        - array : 배열이 filter() 요청됨
        - thisArg : callback 을 실행할 때 this로 사용되는 값 (Optinal)
    
    ```jsx
    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    
    const result = words.filter((word) => word.length > 6);
    
    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]
    
    function isBigEnough(value) {
      return value >= 10;
    }
    
    const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered is [12, 130, 44]
    
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    
    console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
    ```
    
- reduce() 메서드
:  배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결괏값을 반환함 → 얕은 복사 Array 생성
    - arr.reduce(reducer 함수, [initailValue])
    - 리듀서 함 수는 네 개의 인자를 가짐
        1. 누산기 (acc)
        2. 현재 값 (cur)
        3. 현재 인덱스 (idx)
        4. 원본 배열 (src)
    
    ```jsx
    const array1 = [1, 2, 3, 4];
    
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    
    console.log(sumWithInitial);
    // Expected output: 10
    ```
    
    | callback | accumulator | currentValue | currentIndex | array | 반환값 |
    | --- | --- | --- | --- | --- | --- |
    | 1번째 호출 | 0 | 1 | 1 | [0,1,2,3,4] | 1 |
    | 2번째 호출 | 1 | 2 | 2 | [0,1,2,3,4] | 3 |
    | 3번째 호출 | 3 | 3 | 3 | [0,1,2,3,4] | 6 |
    | 4번째 호출 | 6 | 4 | 4 | [0,1,2,3,4] | 10 |
    
    ```jsx
    const array1 = [1, 2, 3, 4];
    
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ,10);
    
    console.log(sumWithInitial);
    // Expected output: 20
    ```
    
    | callback | accumulator | currentValue | currentIndex | array | 반환값 |
    | --- | --- | --- | --- | --- | --- |
    | 1번째 호출 | 10 | 0 | 0 | [0,1,2,3,4] | 10 |
    | 2번째 호출 | 10 | 1 | 1 | [0,1,2,3,4] | 11 |
    | 3번째 호출 | 11 | 2 | 2 | [0,1,2,3,4] | 13 |
    | 4번째 호출 | 13 | 3 | 3 | [0,1,2,3,4] | 16 |
    | 5번째 호출 | 16 | 4 | 4 | [0,1,2,3,4] | 20 |

## Undefined vs Null

---

- 공통점 : 각각의 유일한 값을 지님 → undefined 타입 : undefined , null 타입 : null
    - window 객체에서는 null 타입이 object로 나옴 → 처음에 잘못 개발한 것. 고칠 수 없는 상황.
- Undefined
    - ‘아무 값도 할당받지 않은 상태’ ⇒ 개발자가 의도적으로 값 할당 X → JS 엔진이 변수를 초기화 할 때 사용되는 것
    - var 키워드로 선언한 변수 → 호이스팅 : 올라간 후 undefined로 초기 됨
    - 변수 선언시 값을 할당하지 않은 변수를 출력하면 undefined가 반한됨
        
        ```jsx
        let helloi;
        console.log(hello); // undefined
        ```
        
- Null
    - ‘비어있는, 존재하지 않는 값’ ⇒ 개발자가 의도적으로 null 할당
    - null 할당 : 변수가 이전에 참조하던 값을 명시적으로 참조하지않겠다고 하는 것 → JS 엔진이 이 변수의 메모리 공간에 대해 가비지 컬렉션을 수행함

## 얕은 비교 vs 깊은비교

---

- 얕은 비교 (Shallow Compare)
    - 값 비교 : 숫자, 문자열 등 원시 자료형 (Call Stack)
    - 참조되는 위치 비교 : 배열, 객체 등 참조 자료형 (Heap)
    
    ```jsx
    const ob1 = {a:1, b:2};
    const ob2 = {a:1, b:2};
    
    obj1 === obj2; // false --> 객체의 비교는 '위치'로 비교됨
    
    5 === 5; // true ---> 원시 자료형 비교는'값' 으로 비교됨 
    ```
    
- 깊은 비교
    - 객체의 경우에도 값으로 비교함
    - Object depth 가 깊지 않은 경우 : JSON.stringify() 사용
    - Object depth 가 깊은 경우 : lodash 라이브러리의 isEqual() 사용 → 깊은 비교를 도와주는 라이브러리
    
    ```jsx
    const obj1 = {a:1, b:2};
    const obj2 = {a:2, b:2};
    
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
    ```
    

## 얕은 복사 vs 깊은복사

---

- 얕은 복사 : spread operator(…), Object.assign, Array.from(), slice 를 이용함
    
    ```jsx
    const aArray = [1,2,3];
    
    // shallow copy with spread operator
    const bArray = [...aArray, 4];
    console.log('aArray', aArray);
    console.log('bArray', bArray);
    console.log('aArray === bArray', aArray === bArray);
    
    // shallow copy with Object.assign();
    const cArray = Object.assign([], bArray);
    console.log('cArray', cArray);
    console.log('baArray === cArray', bArray === cArray);
    
    // Nested Arrays and Objects (중첩이된 배열이나 객체)
    cArray.push([5,6,7]);
    console.log('cArray', cArray);
    const dArray = [...cArray,10];
    console.log('dArray', dArray);
    dArray[4].push([8]);
    console.log('cArray', cArray); // dArray 에 8을 넣었는데 cArray까지 영향을 받음.
    console.log('dArray', dArray);
    ```
    
- 얕은 동결 (Object.freeze()) : 객체를 동결함 → 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지 함
    
    ```jsx
    // 얕은 동결
    const aObject = {
        "a": "a",
        "b": "b",
        "cobject":{"a":1, "b":2}
    };
    
    Object.freeze(aObject);
    aObject.a = "c";
    console.log('aObject', aObject);    // a : 동결됨
    
    aObject.cobject.a = 3;
    console.log('aObject', aObject);    // c : 동결안됨 (중첩)
    ```
    
- 깊은 복사
    
    ```jsx
    // deep copy with json.parse(json.stringify())
    const aObject = {
        "a": "a",
        "b": "b",
        "cobject":{"a":1, "b":2}
    };
    
    // deep copy with json.parse(json.stringify)
    const newAObject = JSON.parse(JSON.stringify(aObject));
    
    console.log('aObject', aObject); //
    console.log('newAObject', newAObject);
    aObject.cobject.a = 3;
    console.log('aObject', aObject); //
    console.log('newAObject', newAObject);
    
    // deep copy with nested spread operator
    
    const newAObject = {...aObject, cobject:{...aObject.cobject}}; // 전체 얕은 복사
    
    console.log('aObject', aObject); //
    console.log('newAObject', newAObject);
    aObject.cobject.a = 3;
    console.log('aObject', aObject); //
    console.log('newAObject', newAObject);
    
    // // deep copy with lodash library
    const newDObject =  _.cloneDeep(aObject);   // html 에서 cdn 가져오기.
    console.log('aObject', aObject); //
    console.log('newDObject', newDObject);
    aObject.cobject.a = 3;
    
    // deep copy with structuredClone() : 내장되어있는 메서드 활용
    const mushroom = {
        amanita: ["muscaria", "virosa"],
    };
    
    const mushroom2  = structuredClone(mushroom); // deep copy
    
    mushroom2.amanita.push("pantherina");
    mushroom.amanita.pop();
    
    console.log('mushroom', mushroom); 
    console.log('mushroom2', mushroom2);
    ```
    

## 함수 표현식 (Expressions) vs 함수 선언문 (Statements)

---

- 함수 선언문
    
    ```jsx
    function funcDeclaration() {
       return ‘함수 선언문’
    }
    ```
    
    - 함수를 만들고 이름을 지정하는 것
    - 호이스팅에 영향을 받음 → 코드가 실행되기 전에 로드됨
- 함수 표현식
    
    ```jsx
    let funcExpression = function() {
    		return '함수 표현식'
    }
    ```
    
    - 함수를 만들고 변수에 할당하는 경우
    - 호이스팅에 영향을 받지 않음 → 인터프리터가 해당 코드 줄에 도달 할 때만 로드됨
    
    ```jsx
    // 함수 선언식
    alert(foo());  // Alert 5.
    function foo() {return 5; }
    
    // 함수 표현식
    alert(foo()); // Error!! foo wasn't loaded yet
    var foo = function () {return 5;}
    ```
    

## IIFE(Immediately Invoked Function Expression)

---

- 즉시 실행 함수 표현 (IIFE) : 정의되자마자 즉시 실행되는 JavaScript Fuction
- 기본적인 형태
    
    ```jsx
    (
    		function(){
    		
    		}
    )()
    ```
    
    - 첫번째 소괄호 : 전역 선언을 막고 IIFE 내부 안으로 다른 변수 접근막기
    - 두번째 소괄호 : 즉시 실행 함수를 생성하는 괄호 → 자바스트립트 엔진이 함수를 즉시 해석하고 실행하게 함
- IIFE 의 주된 사용 목적
    - 변수를 전역으로 선언하는 것을 피하기 위함
    - IIFE 내부 안으로 다른 변수들이 접근하는 것을 막기 위함
    
    ```jsx
    (
        function(){
            var aName = 'Barry';
        }
    )();
    
    // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가.
    console.log(aName);  // ReferenceError: aName is not defined
    
    // 원래 함수
    var result = function(){
        var name = "Batty";
        return name;
    };
    
    console.log(result); // 함수 자체가 리턴되어 출력됨.
    
    // IIFE 를 하면 함수 자체가 아닌 바로 호출이 되어 함수 값이 리턴됨.
    var result = (function(){
        var name = "Batty";
        return name;
    })();
    
    console.log(result); // Batty
    ```
    
- 이름 없는 함수를 위해서도 사용 가능
    
    ```jsx
    const hello = function(a,b) {};
    
    (function(a,b){})();
    ```
    
- IIFE 심화
    
    ```jsx
    //general function
    const score = () => {
        let count = 0;
        return {
            current: () => {
                return count
            },
            increment: () => {
                count++
            },
            reset: () => {
                count = 0
            }
        }
    }
    console.log(typeof score);
    console.log(score);
    console.log(score().current()); // 0
    score().increment();
    console.log(score().current()); // 0 --> 함수 자체가 호출되므로.
    
    // use IIFE
    const score = (() => {
        let count = 0;
        return {
            current: () => {
                return count
            },
            increment: () => {
                count++
            },
            reset: () => {
                count = 0
            }
        }
    })()
    console.log(typeof score);
    console.log(score);
    console.log(score.current()); // 0 : 이미호출되었기 때문에 score.current()
    score.increment();
    score.increment();
    score.increment();
    score.increment();
    console.log(score.current()); // 4
    score.reset();
    console.log(score.current()); // 0
    
    // general function
    const increment = () => {
        let counter = 0;
        console.log(counter);
        const number = (num) =>
            console.log(`it is ${num} number`);
        return () => {counter++; number(counter);}
    }
    
    increment();
    increment();
    
    // use IIFE
    const increment = (() => {
        let counter = 0;
        console.log(counter);
        const number = (num) =>
            console.log(`it is ${num} number`);
        return () => {counter++; number(counter);}
    })();
    
    increment();
    increment();
    ```
    

## Intersection observer

---

- Intersection observer :
    - 인스타그램, 페이스 북의 ‘무한 스크롤’ 기능 구현 및 Image Lazy Loading 구현할 때 사용함
        
        ![%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-07-20_010058](https://github.com/user-attachments/assets/8c199d98-eb5c-4351-aedb-0b96e82778a2)
        
        Image Lazy Loading 참고 사이트
        
    - 기본적으로 브라우저 뷰포트와 설정한 요소의 교차점을 관잘하며, 요소가 뷰포트에 포함되지 않는지 (사용자 화면에 지금 보이는 요소인지 아닌지)를 구별하는 기능을 제공함
    - intersection root , intersection ratio, target elemet
        - threshold : 0.5
        target element is moving upwards
            
            intersection ratio: 0 → intersection ratio: 0.25 → intersection ratio: 0.5 [execute callback function!] → intersection ratio : 1 (완전 교차 다함) →  intersection ratio: 0.5 [execute callback function!] → intersection ratio: 0
            
- 무한 스크롤
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Intersection-observer</title>
        <style>
            .item{
                text-align: center;
                padding: 20px 0px;
                margin: 0px
            }
    
            .item:nth-child(even) {
                background-color: lightcoral;
            }
        </style>
    </head>
    <body>
        <div class="list"></div>
        <p class="end"></p>
        <script src="script.js">
        </script>
    </body>
    </html>
    ```
    
    ```jsx
    const count = 20;
    let itemIndex = 0;
    
    const observer = new IntersectionObserver(entries => {
        console.log('entries', entries);
    
        entries.forEach(entry => {
            const list = document.querySelector('.list');
    
            if(entry.isIntersecting){
                for(let i = itemIndex; i < itemIndex + count; i++){
                    let item = document.createElement('p');
    
                    item.textContent = i;
                    item.className = 'item';
                    list.appendChild(item);
                }
    
                itemIndex = itemIndex +  count;
            }
        })
    }, {root: null, threshold: 0.1})
    
    observer.observe(document.querySelector('.end'))
    ```
    
- Image Lazy Loading
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            img{
                width: 400px;
                height: 300px;
                display: block;
                margin: 10px auto;
            }
        </style>
    </head>
    <body>
        <img
            src="https://via.placeholder.com/400x300"
            data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
        />
        <img
                src="https://via.placeholder.com/400x300"
                data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
        />
        <img
                src="https://via.placeholder.com/400x300"
                data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
        />
        <img
                src="https://via.placeholder.com/400x300"
                data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
        />
        <script>
    
            const observer = new IntersectionObserver(
                function(entries, observer) {
                    console.log(entries);
                    entries.forEach((entry) => {
                        if(entry.isIntersecting){
                            entry.target.src = entry.target.dataset.src;
    
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 1
                }
            );
    
            const imgs = document.querySelectorAll('img');
            imgs.forEach((img) => {
                observer.observe(img);
            })
        </script>
    </body>
    </html>
    ```
    

## Pure Function

---

- 순수 함수 (Pure Function) : 함수형 프로그래밍 페러다임의 한 부분
- 순수 함수의 두가지 규칙
    1. Same Input ⇒ Same Output
    : 같은 입력값이 주어졌을 때, 언제나 같은 결괏값을 리턴한다.
        
        ```jsx
        const add = (x,y) => x + y;
        console.log(add(10,20));
        
        const fullName = (first, last) => '${first}${last}';
        console.log(fullName("Hyo", "Park"))
        ```
        
    2. No Side Effects
    : 사이드 이펙트를 만들지 않는다.
        
        ```jsx
        const z = 1;
        const sum = (x,y) => x+y+z;
        console.log(sum(10,20)); // z 가 들어오면 Impure 함수가 됨
        ```
        
- Pure Function 을 사용하는 이유
    1. 클린 코드
    2. 쉬운 테스트
    3. 쉬운 디버그
    4. 독립적인 코드 (Decoupled / Independent)
- Pure Function vs Impure Fuction
    
    ```jsx
    // Impure function
    let x = 0;
    const numberUp = () => x +=1;
    console.log(numberUp());
    console.log(x);
    
    // pure function
    let x = 0;
    const pureNumberUp = (num) => num +=1;
    console.log(pureNumberUp(x));
    console.log(x);
    
    // Impure function
    const alphabetArray = ['A', 'B'];
    const addItemToArray = (originalArray,newItem) => {
        originalArray.push(newItem);
        return originalArray;
    }
    console.log(addItemToArray(alphabetArray,'C'));
    console.log(alphabetArray);
    
    // pure function
    const alphabetArray = ['A', 'B'];
    const pureAddItemToArray = (originalArray,newItem) => {
        return [...originalArray, newItem];
    }
    console.log(pureAddItemToArray(alphabetArray,'C'));
    console.log(alphabetArray);
    
    ```
    

## Currying

---

- 함수와 함께 사용하는 고급 기술 (JS 이외에 다른 언어에도 존재 함)
- 단일 함수를 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합될수 있게 변환하는 것
- 커링은 함수를 호출하는 것이 아닌 변환하는 것

```jsx
const sum = (x,y) => x + y;

const curriedSum = x=>y => x+y;

console.log(sum(10,20));
console.log(curriedSum(20));
console.log(curriedSum(10)(20));

const makeFood =(ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
    `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanerMakeFood("Bread")("Ham")("grape");
console.log(newHamburger);

function log(date, importance, message){
    alert(`[${date.getHours()}: ${date.getMinutes()}]: [${importance}] ${message}`)
}

log(new Date(), "Debug", "some bug");

// currying function

function curry(f){
    return function(a){
        return function(b){
            return function (c){
                return f(a,b,c);
            }
        }
    }
}

const curriedLog = curry(log);
curriedLog(new Date())("Debug")("some bug");

// create dynamic currying function

function dynamicCurry(func){
    return function curried (...args) {
        if (args.length >= func.length){
            return func.apply(this, args);
        }
        else{
            return function (...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const sum2 = (x,y,z,j,a) => x + y+ z+ j+a;

const curriedSum2 = dynamicCurry(sum2);
console.log(curriedSum2(1)(2)(3)(4)(5));
```

## strict mode

---

- ECMA Script 5 에서 소개된 Javascript 의 엄격 모드
- 엄격 모드는 평범한 JavaScript 시멘틱스에 몇 가지 변경이 일어나게 함
    1. 기존에 조용히 무시되던 에러들을 throwing 함
    2. JavaScript 엔진의 최적화 작업을 어렵게 만드는실수들을 바로 잡음 (비엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어짐) 
- strict mode 적용 방법
    1. 파일에 “use strict” 지시자 입력
    2. 함수 안에 “use strict” 를 사용해서 그 함수만을위한 strict mode 적용
    3. class 를 사용하면 자동으로 strict mode 가 적용
    
    ```jsx
    "use strict";
    
    function sum(a,b){
        // "use stirct" --> 함수 내에서만 엄격함
        return a + b;
    }
    
    class Cat{
        // 자동 strict mode 적용 
    }
    ```
