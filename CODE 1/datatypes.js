"use strict"; // This directive enables strict mode, which helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.

// alert("Hello, World!"); // This will display an alert box with the message "Hello, World!"
//we are using nodejs not browser so alert will not work here
console.log("Hello, World!"); // This will print the message "Hello, World!" to the console
let name = "Rishav"; // This declares a variable 'name' and assigns it the value "Rishav"
console.log(name); // This will print the value of the variable 'name' to the console, which is "Rishav"
let age = 25; // This declares a variable 'age' and assigns it the value 25
console.log(age); // This will print the value of the variable 'age' to the console, which is 25
let isStudent = true; // This declares a variable 'isStudent' and assigns it the boolean value true
console.log(isStudent); // This will print the value of the variable 'isStudent' to the console, which is true


//number => 2 to power 53
//bigint => 2 to power 63
//string => "Hello, World!"
//boolean => true or false
//null is a stand alone value that represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
//undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

//symbol => A symbol is a unique and immutable primitive value and may be used as the key of an Object property. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

//object => An object is a collection of properties, and a property is an association between a key (or name) and a value. A property's value can be a function, in which case the property is known as a method. Objects are used to store keyed collections of various data and more complex entities.

console.log(typeof name); // This will print the type of the variable 'name' to the console, which is "string"
console.log(typeof age); // This will print the type of the variable 'age' to the console, which is "number"
console.log(typeof isStudent); // This will print the type of the variable 'isStudent' to the console, which is "boolean"
console.log(typeof null); // This will print the type of the value 'null' to the console, which is "object" (this is a known quirk in JavaScript)
console.log(typeof undefined); // This will print the type of the variable 'undefined' to the console, which is "undefined"