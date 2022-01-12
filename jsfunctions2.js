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

//function expression
let add3= function(a,b){
    return a+b;
}
console.log(add3(10,20));

//iife
let add4= (function(a,b){
    return a+b;
})(10,30);
console.log(add4);