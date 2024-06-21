// // document 가 load 됐을 때,
// window.onload = function (){
//     // 문서가 load 될 때 이 함수를 실행
//     // : 아이디가 'text' 인 요소를 return
//     let text = document.getElementById('text');
//
//     // text 요소에 innerText 추가
//     // : 기존 text 요소의 innerText 가 변경됨
//     text.innerText = 'Loaded HTML document';
// }
//
// const aElemnet = document.querySelector('a');
//
// aElemnet.addEventListener('click', () => {
//     alert('a element clicked');
// })

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