let carName1 ="Volvo XC60";
console.log(carName1);
let carName2 = 'Volvo XC60';
console.log(carName2);

let answer1 = "It's alright";
console.log(answer1);
let answer2 = "He is called 'Johnny";
console.log(answer2);
let answer3 = 'He is called "Jojnny"';
console.log(answer3);
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text);
console.log(text.length);

let firstName = "John";
console.log(firstName);
let firstName2=new String("John");
console.log(firstName2);

//3 methodsfor extracting part ofd a string
// slice(start, end) // returns extracted part in new string/
// slice: if pos is neg it counts form end of string
//if you omit the second parameter, the method will sl\ice out the rest of the string
// substring(start, end)
// substr(start, length)
let str = "Apple, Banana, Kiwi";
console.log(str);
console.log(str.slice(7,13));
console.log(str);

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");
console.log(newText);



console.log(newText.toUpperCase());
console.log(newText.toLowerCase());

//concat()
console.log(newText.concat(newText));
newText= newText+"   ";
console.log(newText.length);
//trim()
console.log(newText.trim());

console.log(newText.length);
//charAt()
console.log(newText.charAt(0));
//charCodeAt()
console.log(newText.charCodeAt(0));

let str1 = "Please locate where 'locate' occurs";
console.log(str1.indexOf("locate"));
console.log(str1.lastIndexOf("locate"));
console.log(str1.indexOf("lowcate"));
console.log(str1.lastIndexOf("lowcate"));

let text2 = "Hello world, welcome to the Universe!";
console.log(text2.includes("world"));
console.log(text2.startsWith("Hello"));
console.log(text2.endsWith("Hello"));
console.log(text2.endsWith("Universe!"));