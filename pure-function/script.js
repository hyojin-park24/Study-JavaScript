// Impure function
let x = 0;
const numberUp = () => x +=1;
console.log(numberUp());
console.log(x);

// pure function
let x = 0;
const pureNumberUp = (num) => num +=1;
console.log(pureNumberUp(x));
console.log(x);

// Impure function
const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray,newItem) => {
    originalArray.push(newItem);
    return originalArray;
}
console.log(addItemToArray(alphabetArray,'C'));
console.log(alphabetArray);

// pure function
const alphabetArray = ['A', 'B'];
const pureAddItemToArray = (originalArray,newItem) => {
    return [...originalArray, newItem];
}
console.log(pureAddItemToArray(alphabetArray,'C'));
console.log(alphabetArray);

