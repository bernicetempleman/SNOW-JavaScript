# SNOW-JavaScript
JavaScript is the programming language of HTML and the Web.
It is used to program the behaviour of web pages
```
In HTML, JavaScript code must be inserted between <script> and </script> tags.
You can place any number of scripts in an HTML document. Scripts can be placed in the <body>, or in the <head> section of an HTML page,
     or in both.
     
<!DOCTYPE html>
<html>
<body>
<h2>Welcome</h2>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
</body>
</html>

```
## A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
For example, a function can be called when an event occurs, like when the user clicks a button.
```

<!DOCTYPE html><html>
<head><script>function myFunction() {    document.getElementById("demo").innerHTML = "Paragraph changed.";}</script></head>
<body>
<h1>A Web Page</h1><p id="demo">A Paragraph</p><button type="button" onclick="myFunction()">Try it</button>
</body></html>

```
## External Javascript
Scripts can also be placed in external files.
External scripts are practical when the same code is used in many different web pages.
JavaScript files have the file extension .js.
```
To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:
Example
<script src="myScript.js"></script>
 
Where myScript.js is an external file as

External file: myScript.js
function myFunction() {   document.getElementById("demo").innerHTML = "Paragraph changed.";}

```
## JavaScript Data types
```
JavaScript variables can hold many data types: numbers, strings, objects and more:
var length = 16;                               // Numbervar lastName = "Johnson";                      // Stringvar x = {firstName:"John", lastName:"Doe"};  

JavaScript evaluates expressions from left to right.
var x = 16 + 4 + "Volvo";
Result : 20Volvo

When adding a number and a string, JavaScript will treat the number as a string.
var x = 16 + "Volvo"; Result : 16volvo
```
## JavaScript Dynamics
JavaScript has dynamic types. 
This means that the same variable can be used to hold different data types.

## Example
```
var x;           // Now x is undefinedx = 5;           // Now x is a Numberx = "John";      // Now x is a String
```
## JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".
Strings are written with quotes. You can use single or double quotes:

## Example
var carName = "Volvo XC60";   // Using double quotesvar carName = 'Volvo XC60';   // Using single quotes

## JavaScript Numbers
JavaScript has only one type of numbers.
Numbers can be written with, or without decimals:
Example
var x1 = 34.00;     // Written with decimalsvar x2 = 34;        // Written without decimals
Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 123e5;      // 12300000var z = 123e-5;     // 0.00123

## JavaScript Booleans
Booleans can only have two values: true or false.
Booleans are often used in conditional testing.
Example
var x = 5;var y = 5;    // (x==y) Returns Truevar z = 6;    //(x==z) Returns False

## Javascript types
### JavaScript Objects
JavaScript objects are written with curly braces.
Object properties are written as name:value pairs, separated by commas.
The object (person) in the example below has 4 properties: firstName, lastName, age, and eyeColor.
Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
 
### The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.
The typeof operator returns the type of a variable or an expression:
Example
typeof ""                  // Returns "string"typeof "John"              // Returns "string"typeof 314                 // Returns "number"typeof 3.14                // Returns "number"

Undefined
In JavaScript, a variable without a value, has the value undefined. 
The typeof is also undefined.

Example
var car;                // Value is undefined, type is undefined
Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
car = undefined;        // Value is undefined, type is undefined

 Empty Values
An empty value has nothing to do with undefined.
An empty string has both a legal value and a type.

Example
var car = "";              // The value is "", the typeof is "string"

Null
In JavaScript null is "nothing".
It is supposed to be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null is an object.
You can empty an object by setting it to null

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};person = null;     
 // Now value is null, but type is still an object

## Variable Scope
Scope determines the accessibility (visibility) of variables.
In JavaScript there are two types of scope:
Local scope
Global scope

1.Local JavaScript Variables

Local variables have Function scope:
They can only be accessed from within the function.

Example
```
// code here can NOT use carNamefunction myFunction() {    var carName = "Volvo";    // code here CAN use carName![image](https://user-images.githubusercontent.com/12488769/148696672-85eda485-9635-4edb-ac02-37d20ca6ad09.png)

```


## 2.Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.
A global variable has global scope: All scripts and functions on a web page can access it. 
Example
var carName = "Volvo";// code here can use carNamefunction myFunction() {    // code here can also use carName }


## Type coercion 
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). 
Types :
1.Implicit
2.Explicit

Implicit type coercion :
values can also be converted between different types automatically, and it is called implicit type coercion. 

Explicit type coercion :
Converting between types by writing a appropriate code like Number(value).

String(123) // explicit 
123 + '' // implicit


## === vs ==
=== : strict equality operator
Checks for both datatype and value
Eg:   77 ==='77’          // false

== : loose equality operator
Checks for only value
Eg: 77 == '77’       // true

## Functions
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
Syntax
function name(parameter1, parameter2, parameter3) {    code to be executed}

Example
function myFunction(p1, p2) 
{    return p1 * p2;             
}
Note : The function returns the product of p1 and p2

## Function expression
JavaScript allows us to assign a function to a variable and then use that variable as a function. It is called function expression.

var add = function sum(val1, val2) { 
return val1 + val2; 
}; 
var result1 = add(10,20); 
var result2 = sum(10,20); // not valid

## Anonymous function
JavaScript allows us to define a function without any name. This unnamed function is called anonymous function. Anonymous function must be assigned to a variable.

var showMessage = function (){ alert("Hello World!"); }; 
showMessage(); 
var sayHello = function (firstName) { alert("Hello " + firstName); }; showMessage();
 sayHello("Bill");

## Callback function
A callback is a function that is to be executed after another function has finished executing .
In JavaScript, functions are objects
functions can take functions as arguments.
Functions that do this are called higher-order functions
function that is passed as an argument is called a callback function
```
function doHomework(subject, callback)
 {
// use ` ` (ticks) Template literalsalert(`Starting my ${subject} homework.`);callback();}

function alertFinished(){alert('Finished my homework');}

doHomework('math', alertFinished); 


```
## Self Invoking IIFE
IIFE - Immediately Invoked Function Expression.
It is s a JavaScript function that runs as soon as it is defined.
```
Syntax :
(function () {
    statements
})();
]

Assigning the IIFE to a variable stores the function's result, not the function itself.
var result = (function () { var name = "Barry"; return Assigning the IIFE to a variable stores the function's result, not the function itself.

var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry" name; })(); // Immediately creates the output: result; // "Barry" 

```
## Closures
JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.
A closure is a function having access to the parent scope, even after the parent function has closed.
)
```
var add = (function () {    var counter = 0;    return function () {counter += 1; return counter}})();add();add();add();
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

```

## Function Currying
Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value.
Example :
```
function volume(l, w, h) 
{
  return l * w * h;
}
const curried = _.curry(volume);
volume(2, 3, 4); // 24
curried(2)(3)(4); // 24
```
The original function volume takes three arguments, but once curried we can instead pass in each argument to three nested functions.

## strict mode
You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
"use strict"; Defines that JavaScript code should be executed in "strict mode".
Eg :
         "use strict";           x = 3.14;   
Throws an error as the variable is not declared

## this keyword
The JavaScript this keyword refers to the object it belongs to.
This has different values depending on where it is used.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
```
var person = {    firstName: "John",    lastName : "Doe",    id       : 5566,    fullName : function() {        return this.firstName + " " + this.lastName;    }};
![image](https://user-images.githubusercontent.com/12488769/148696930-67638558-7dc9-472a-a7f4-7c460d8aa0ec.png)

```






