// call();

// const person1 = {
//     firstName: 'fff',
//     lastName: 'dddd',
// };
//
// var test = {
//     firstName: 'John',
//     lastName: 'Smith',
//     fullName : function(){
//         return (this.firstName +', ' + this.lastName);
//     }
//
// }

//fullName.call(person1);

// console.log(test.fullName());
//
// const fullName = function(){
//     console.log(this.firstName +', ' + this.lastName);
// }
//
// const person1 = {
//     firstName: 'John',
//     lastName: 'Smith'
// };
//
// fullName.call(person1);


// fullName.call(person1); 했을때, console.log(this.firstName +'' + this.lastName); 에서 this.lastName 이 출력되지 않는 이유는? : 내가 잘못봄
// fullName.call(person1.firstName); 했을 때, undefined 가 출력되는 이유는?

//fullName(person1);

// Apply();
const fullName = function(city, country){
    console.log(this.firstName +'' + this.lastName, city, country);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
};

fullName.apply(person1, ['London', 'UK']);

// Bind();
const test = function func(language){
    if(language === "kor"){
        console.log(`language: ${this.korGreeting}`);
    }
    else{
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: '안녕',
    engGreeting: 'Hello'
}

//func.bind(greeting);    //-> func 직접 실행 x : greeting 바인딩만 시켜줌.
// const boundFunc = func.bind(greeting);
// boundFunc('kor');
const boundFuncKor = test.bind(greeting)('kor');