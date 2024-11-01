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

