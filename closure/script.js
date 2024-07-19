// let a = 'a';
//
//
// function functionA(){
//     let b = 'b';
//     function functionB() {
//         let c = 'c';
//         console.log(a, b, c);
//     }
//     functionB();
//     console.log(a, b);
// }
//
//
// functionA();

function outerfunction(outerValiable)
{
    return function innerfunction(innerValiable){
        console.log('Outer Value: ' + outerValiable);
        console.log('Inner Value: ' + innerValiable);
    }
}

const newFunction = outerfunction('outside');
newFunction('inside');