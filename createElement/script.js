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