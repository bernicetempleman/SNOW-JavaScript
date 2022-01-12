var name1='Bernice' + '\n'
+ 'Templeman';
console.log(name1);


var newName=`Prakash 
Agarwal`;
console.log(newName);

var person={firstName:'Jasdhir', lastName:'Singh', age: 42}

console.log(person.firstName);

//Hoisting / not declared or declared after use(not recommended)
//use Strict mandatory declaration
"use strict";
x = 10;
console.log(x);
//var x;

//if statements
const time=new Date().getHours();
console.log(time);
if(time<10)
    console.log("Good Morning")
else if (time <20)
    console.log("Good Afternoon")
else
    console.log("Good Evening")