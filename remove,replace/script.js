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