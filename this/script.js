//Method => Object

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

// Function => Window Object
function playAudio() {
    console.log(this)
}

playAudio();

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