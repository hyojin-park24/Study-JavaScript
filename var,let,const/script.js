// var type : 선언 및 할당 여러번 가능 (자유도 높음)
//          : 유지보수 하기 힘듦.
var A = 1;
console.log(A);

var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you?';
console.log(greeting);

// let type : 중복선언 X, 할당 가능

let ttt = 'hi, halo';
console.log(ttt);

//let ttt 'haha';    // error.

ttt = 'papapapa';
console.log(ttt);

// const type : 중복 && 할당 X 
//            : constant (상수) 약자

const damn = 'yess';
console.log(damn);

//const damn = 'ttt'; //error.

//damn = 'yesfds';
//console.log(damn);    //error.

//------------- 02. Scope
//------------- 01) var 함수 레벨 스코프
function func()
{   
    if(true)
    {
        var a = 'a';
        console.log(a);    
    }
    console.log(a);
    
}

func();

//------------- 02) let,const 블록 레벨 스코프
function func2()
{   
    if(true)
    {
        let a = 'a_let';
        console.log(a);    
    }   
}

func2();

//------------- 03. 호이스팅 
//------------- 01) var 호이스팅 : undefined
//------------- 02) let, const 호이스팅 : error.
//console.log(seelping);

//var seelping = '자고싶다';  // undefined

//let seelping = '자고싶다';  //error.

//------------- 03) 함수 호이스팅 : 정상출력.
func3();

function func3()
{
    console.log('hosting test');
}