// var a, b, rest;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);
//
// // 배열의 나머지 값을 들고옴
// [a, b, ...rest] = [10, 20, 30, 40];
// console.log(a);
// console.log(b);
// console.log(rest);
//
// ({a, b} = {a: 7, b: 20});
// console.log(a);
// console.log(b);
// console.log(a,b);
//
// ({a,b,...rest} = {a:10, b:20, c:30, d:40});
// console.log(a,b,rest);
//
// var foo = ["one", "two", "three"];
// var [red, yellow] = foo;
// console.log(red, yellow);

// 객체 구조 분해 할당
// let obj = {
//     accessory: 'horn',
//     animal: 'hors',
//     color: 'purple',
//     hairType: 'curly'
// }
//
// function buildAnimal(animalData){
//     let accessory = animalData.accessory,
//         animal = animalData.animal,
//         color = animalData.color,
//         hairType = animalData.hairType;
//
//     console.log(`Accessory: ${accessory}, Animal: ${animal}, Color: ${color}, Hair Type: ${hairType}`);
// }
// buildAnimal(obj);

// 깊게 들어간 객체 구조 분해 할당

// let person = {
//     name: 'Edun',
//     age: 30,
//     phone : '123',
//     address: {
//         zipcode: 1234,
//         street : 'rainbow',
//         number: 43
//     }
// }
//
// let {address: {zipcode, street, number}} = person;
//
// console.log(zipcode, street, number);

// metadata 객체 생성
var metadata = {
    title: "Scratchpad",
    translations : [
        {
            locale: "de",
            localization_tags: [],
            last_edit : "2024-08-14T-4:44:37",
            url:"/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        },
    ],
    url:"/ko/docs/Tools/Scratchpad",
};

// 구조분해 할당
var {
    title:englishTitle,     //englishTitle 이라는 새로운 변수를 생성 → metadata title 값을 할당.
    translations: [{title: localizedTitle}],    //localizedTitle 라는 새로운 변수를 생성 → metadata translations 의 title 값을 할당.
} = metadata;

console.log(englishTitle, localizedTitle); // "Scratchpad", "JavaScript-Umgebung"
