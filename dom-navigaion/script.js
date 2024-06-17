let val;

// 선택자
const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

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
console.log('val', val);