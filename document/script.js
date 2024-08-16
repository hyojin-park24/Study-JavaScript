let val;

// val = document;

// val = document.baseURI  // 웹 페이지의 절대 URL 반환 //
// val = document.head;    // <h> 반환
// val = document.body;    // <body> 반환

// val = document.forms;   // <form> 반환
// val = document.forms[0].id;
// val = document.forms[0].classList;
// val = document.forms[0].className;

// val = document.scripts; // <script> 반환
// val = document.scripts[2].getAttribute('src');

//------------------------------------------------ 1) 단일 요소 접근
//const headerContainer = document.getElementById('header-container');
 const headerContainer = document.querySelector('#header-container');    // id
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

