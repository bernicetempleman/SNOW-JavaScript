//declared/defined a function
function sayHello(){
    //console.log("Hello");

    //return
    return "Hello"
}

function sayHello2(name){
    //console.log("Hello");

    //return
    return "Hello " + name
}

//call / invoke a function
//sayHello();
//reusable / call again
//sayHello();


//return value
var x =sayHello();
console.log(x);
console.log(sayHello());
var x = sayHello2('Bernice');
console.log(x);
//Again
console.log(sayHello2('BT'));

function sum(x,y){
    return x+y;
}
console.log(sum(10,20));

//es6 arrow functions / compact and more readable
let add=(a,b)=>a+b;
console.log(add(20,30));

var mySum2=function sum2(x,y){
    return x+y;
}
console.log(mySum2(10,20));

//anonymous function/ doe not have name/ must be assigned to a variable

var aFunction=function(x,y){
    return x+y;
}
console.log(aFunction(30,10));

//callback functions / executed after another function has finished executing
// displaysum after calculateSum
//higher function 
function doHomework(subject, callback)
{
    //use `` ticks template literals
    //back tick in 6
    console.log(`Starting my ${subject} homework.`);callback();
}


//callback because another function 
function alertFinished(){
    console.log('Finished my homewok');
    
}

//passing a function as a parameter
doHomework('math', alertFinished);//call the function

//calculateSum(num1, num2, callback)
//displaySum()

function calculateSum(num1, num2, callback)
{
    //use `` ticks template literals
    //back tick in 6
    console.log(`Calculating Sum of  ${num1} and ${num2}.`); 
    let sum = num1 + num2;
    callback(sum);
}


//callback because another function 
function displaySum(sum){
    console.log(`Displaying sum ${sum}.`);
    
}

//passing a function as a parameter
calculateSum(100, 1000, displaySum);//call the function