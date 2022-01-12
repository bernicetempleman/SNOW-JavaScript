var cars=['Saab', 'Volvo', 'BMW'];
console.log(cars[1]);
console.log(cars);

for(i=0;i<cars.length;i++){
console.log(cars[i]);}

cars[0]="Opel";
console.log(cars);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

//adding array elements
//push(0 method
fruits.push("lemon");
console.log(fruits);

//convert arrays to strings
console.log(fruits.toString());
console.log(fruits.join("**"));
var x =fruits.pop();
console.log(x);
console.log(fruits);

x = fruits.shift();
console.log(x);
console.log(fruits);

fruits.unshift("Lemon");   
console.log(fruits); 

var x = fruits.push("Kiwi");       
console.log(x);
console.log(fruits);

delete fruits[0]; 
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits.splice(0, 1);        // Removes the first element of fruits
console.log(fruits);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   
var arr2 = ["Cecilie", "Lone"];
var arr3 = ["Emil", "Tobias", "Linus"];
var arr1 = myGirls.concat(myBoys);   
// Concatenates (joins) myGirls and myBoys
//The concat() method does not change the existing arrays. It always returns a new array.
var myChildren = arr1.concat(arr2, arr3);
var myChildren = arr1.concat("Peter"); 
console.log(myChildren);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(fruits);
console.log(citrus);
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);

fruits.sort(); 
console.log(fruits);

fruits.reverse();  

console.log(fruits)

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)
