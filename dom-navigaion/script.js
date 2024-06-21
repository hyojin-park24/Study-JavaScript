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
