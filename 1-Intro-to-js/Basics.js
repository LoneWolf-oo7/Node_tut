// console.log("Hello Kunal");  
// console.log(Symbol('hello'));
// console.log(typeof 12);
// console.log(typeof "abcd");
// console.log(typeof -0);
// console.log(typeof undefined);
// console.log(typeof null);

// console.log(parseInt(10/3));
// console.log(Math.floor(10/3));

// var x = 10;
// var x = 20;
// console.log(x);

function fun() {
    console.log("Function fun called");
}

// function gun(fn) {
//     console.log("Entered function gun");
//     fn();
//     console.log("leaving function gun");
//     console.trace();
// }

// gun(function logger(){
//     console.log("Passing function into gun");
// })

// let arr = [1,2,3,4,5];
// arr.map(function log(v,i) {
//     console.log(v,i);
// })

// function fun() {
//     console.log("hello world!");
//     setTimeout(function exec() {
//         console.log("1st set");
//     }, 1000);
//     setTimeout(function exec2(){
//         console.log("2nd set");
//     },2000);
//     console.log("fun ends");
// }
// fun();
// for(let i=0; i<=4;i++){

// }
// setTimeout(function(){console.log("0 set")},0);

let data;
function fetchResponse(url) {
    // some code
    // some code
    // some code
    // some code
    console.log("Start downloading");
    setTimeout(function resp() {
        console.log("downloading completed");
        let Response = "dummy data";
        data = Response;
    },3000);
    
}

fetchResponse("www.google.com");
console.log(data);
// console.log(X);