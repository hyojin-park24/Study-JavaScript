const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');


let todos = [];

createBtn.addEventListener('click', createNewTodo);

// 새로운 item 생성 함수
function createNewTodo(){
    // 새로운 todo 객체 생성
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false
    }

    // 배열 처음에 새로운 아이템 추가
    todos.unshift(item);

    // 요소 생성하기 (이전까지는 데이터만 생성됨)
   const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

   // 리스트 요소 안에 방금 생성한 아이템 요소 추가
   list.prepend(itemEl);    // 노드 집어 넣기, 첫번째로 노드 추가

    inputEl.removeAttribute('disabled');    // 수정할 수 있도록 하기.
    inputEl.focus(); // 바로 입력하기.

    saveToLocalStorage();
}

// 객체 별 요소 생성 함수
function createTodoElement(item) {
    // item 요소 : checkbox, input, action
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    // 이전에 저장된 data 중 완료된 것이 있으면 complete.
    if(item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setArritbute = ('disabled');

    // action 요소 : edit, remove
    const actionsEl = document.createElement('div');
    actionsEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circles';

    // 요소별 이벤트
    // 추가된 item 체크시, class 에 complete 추가 or 삭제 --> 어디에 사용되는지?
    checkboxEl.addEventListener('change', ()=>{
        item.complete = checkboxEl.checked;
        if(item.complete){
            itemEl.classList.add('complete');
        } else{
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage();
    })

    // input 시, 마우스가 포커스 아웃이 되면 ('blur') 수정할 수 없음 ('disabled')
    inputEl.addEventListener('blur', () =>{
        inputEl.setAttribute('disabled','');
        saveToLocalStorage();
    })

    // input 시, 작성한 text 를 item 객체의 text 값에 대입
    inputEl.addEventListener('input', ()=> {
        item.text = inputEl.value;
    })

    // 수정 버튼을 누를 시, 수정할 수 없게 했던 속성을 제거한 후 focus 처리
    editBtnEl.addEventListener('click', ()=>{
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    })

    // 삭제 버튼을 누를 시, 클릭한 요소를 제외한 나머지 값을 새로운 todos 배열에 대입 후 remove 처리
    removeBtnEl.addEventListener('click', ()=>{
        todos = todos.filter(t=>t.id !== item.id);  // 클릭한 요소의 id가 다른 것만 todos 에 반영

        itemEl.remove();    // 실제 데이터 지우기.
        saveToLocalStorage();
    })

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

// local storage 에 data 저장하고 불러오기.
function saveToLocalStorage(){
    const data = JSON.stringify(todos); // local storage 에는 string 만 값을 저장할 수 있기 때문
    localStorage.setItem('todos', data);
}

function loadFromLocalStorage(){
    const data = localStorage.getItem('todos');

    if(data)
    {
        todos = JSON.parse(data);  // string ��로 저장된 data ��� object 로 변환
    }
}

// local storage 불러온 data 를 요소에 나타내기
function displayTodos(){
    loadFromLocalStorage();

    for (let i = 0; i < todos.length; i++){
        const item = todos[i];

        const {itemEl} = createTodoElement(item);

        list.append(itemEl);
    }
}

displayTodos();