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

// const buttonElement = document.querySelector('.btn2');
//
// buttonElement.addEventListener('click', (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.target.classList;
//
//     val = event.type;
//     val = event.clientY;    // window 로부터의 거리 좌표
//     val = event.offsetY;    // 요소로부터의 거리 좌표
//     console.log(val);
// })

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

