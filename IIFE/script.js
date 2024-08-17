// (
//     function(){
//         var aName = 'Barry';
//     }
// )();
//
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가.
// console.log(aName);  // ReferenceError: aName is not defined
//
// // 원래 함수
// var result = function(){
//     var name = "Batty";
//     return name;
// };
//
// console.log(result); // 함수 자체가 리턴되어 출력됨.
//
// // IIFE 를 하면 함수 자체가 아닌 바로 호출이 되어 함수 값이 리턴됨.
// var result = (function(){
//     var name = "Batty";
//     return name;
// })();
//
// console.log(result); // Batty
//
//
//
// const hello = function(a,b) {};
//
// (function(a,b){})();

//general function
// const score = () => {
//     let count = 0;
//     return {
//         current: () => {
//             return count
//         },
//         increment: () => {
//             count++
//         },
//         reset: () => {
//             count = 0
//         }
//     }
// }
// console.log(typeof score);
// console.log(score);
// console.log(score().current()); // 0
// score().increment();
// console.log(score().current()); // 0 --> 함수 자체가 호출되므로.
//
// // use IIFE
// const score = (() => {
//     let count = 0;
//     return {
//         current: () => {
//             return count
//         },
//         increment: () => {
//             count++
//         },
//         reset: () => {
//             count = 0
//         }
//     }
// })()
// console.log(typeof score);
// console.log(score);
// console.log(score.current()); // 0 : 이미호출되었기 때문에 score.current()
// score.increment();
// score.increment();
// score.increment();
// score.increment();
// console.log(score.current()); // 4
// score.reset();
// console.log(score.current()); // 0
//
// // general function
// const increment = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) =>
//         console.log(`it is ${num} number`);
//     return () => {counter++; number(counter);}
// }
//
// increment();
// increment();

// use IIFE
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => {counter++; number(counter);}
})();

increment();
increment();