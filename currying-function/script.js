const sum = (x,y) => x + y;

const curriedSum = x=>y => x+y;

console.log(sum(10,20));
console.log(curriedSum(20));
console.log(curriedSum(10)(20));

const makeFood =(ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
    `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanerMakeFood("Bread")("Ham")("grape");
console.log(newHamburger);


function log(date, importance, message){
    alert(`[${date.getHours()}: ${date.getMinutes()}]: [${importance}] ${message}`)
}

log(new Date(), "Debug", "some bug");

// currying function

function curry(f){
    return function(a){
        return function(b){
            return function (c){
                return f(a,b,c);
            }
        }
    }
}

const curriedLog = curry(log);
curriedLog(new Date())("Debug")("some bug");

// create dynamic currying function

function dynamicCurry(func){
    return function curried (...args) {
        if (args.length >= func.length){
            return func.apply(this, args);
        }
        else{
            return function (...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const sum2 = (x,y,z,j,a) => x + y+ z+ j+a;

const curriedSum2 = dynamicCurry(sum2);
console.log(curriedSum2(1)(2)(3)(4)(5));