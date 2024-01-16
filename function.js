// regular function - function statement
// function hello(){
//     console.log('Hello World!')
//     //by default function return undefined;
// }

// hello()

// function expression 

// const hello = function(){
//     console.log('Hello World');
// }

// hello()

//named function expression 

// const hello = function Hello(){
//     console.log('Hello')
// }
// hello()

// Arrow function 

const hello = (a,b) =>{
    const obj = {
        a:a,
        b:b
    }
    return obj;
}
const res = hello(10,20);
console.log(res)

// anonymous functions

function foo(){
    function soo(){
        console.log('Felloo....');
    }
    soo();
}
foo();
