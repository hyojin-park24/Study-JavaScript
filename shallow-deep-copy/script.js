// const aArray = [1,2,3];
//
// // shallow copy with spread operator
// const bArray = [...aArray, 4];
// console.log('aArray', aArray);
// console.log('bArray', bArray);
// console.log('aArray === bArray', aArray === bArray);
//
// // shallow copy with Object.assign();
// const cArray = Object.assign([], bArray);
// console.log('cArray', cArray);
// console.log('baArray === cArray', bArray === cArray);
//
// // Nested Arrays and Objects (중첩이된 배열이나 객체)
// cArray.push([5,6,7]);
// console.log('cArray', cArray);
// const dArray = [...cArray,10];
// console.log('dArray', dArray);
// dArray[4].push([8]);
// console.log('cArray', cArray); // dArray 에 8을 넣었는데 cArray까지 영향을 받음.
// console.log('dArray', dArray);

// 얕은 동결
// const aObject = {
//     "a": "a",
//     "b": "b",
//     "cobject":{"a":1, "b":2}
// };

// Object.freeze(aObject);
// aObject.a = "c";
// console.log('aObject', aObject);    // a : 동결됨
//
// aObject.cobject.a = 3;
// console.log('aObject', aObject);    // c : 동결안됨 (중첩)

// deep copy with json.parse(json.stringify())
const aObject = {
    "a": "a",
    "b": "b",
    "cobject":{"a":1, "b":2}
};

// deep copy with json.parse(json.stringify)
const newAObject = JSON.parse(JSON.stringify(aObject));

console.log('aObject', aObject); //
console.log('newAObject', newAObject);
aObject.cobject.a = 3;
console.log('aObject', aObject); //
console.log('newAObject', newAObject);

// deep copy with nested spread operator

// const newAObject = {...aObject, cobject:{...aObject.cobject}}; // 전체 얕은 복사

console.log('aObject', aObject); //
console.log('newAObject', newAObject);
aObject.cobject.a = 3;
console.log('aObject', aObject); //
console.log('newAObject', newAObject);

// // deep copy with lodash library
const newDObject =  _.cloneDeep(aObject);   // html 에서 cdn 가져오기.
console.log('aObject', aObject); //
console.log('newDObject', newDObject);
aObject.cobject.a = 3;

// deep copy with structuredClone() : 내장되어있는 메서드 활용
const mushroom = {
    amanita: ["muscaria", "virosa"],
};

const mushroom2  = structuredClone(mushroom); // deep copy

mushroom2.amanita.push("pantherina");
mushroom.amanita.pop();

console.log('mushroom', mushroom);
console.log('mushroom2', mushroom2);