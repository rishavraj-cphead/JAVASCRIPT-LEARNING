// primitive

// Primitive data types are the most basic data types in JavaScript. They include:
// 1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// 2. String: Represents a sequence of characters. Example: "Hello, World!"
// 3. Boolean: Represents a logical value, either true or false. Example: true, false
// 4. Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
// 5. Null: Represents the intentional absence of any object value. Example: null ex temp 
// 6. Symbol: Represents a unique identifier. Example: Symbol('description')
// 7. BigInt: Represents integers with arbitrary precision. Example: 123n

//they are call by values types means a copy of them is sent during the function call.
//  So if we change the value of the copy inside the function, it will not affect the original value outside the function.


//-----------------------------------------------------------------------------------------------------------------------------

//reference (Non-primitive)
// Reference data types are objects that can be modified after creation. They include:
// 1. Object: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }
// 2. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// 3. Function: Represents a block of code that can be executed. Example: function greet() { console.log("Hello!"); }
//they are call by reference types means a reference of them is sent during the function call.
const myfunction = function() {
    console.log("This is a function expression.");
}


//how to check the data type of a variable in javascript
// we can use the typeof operator to check the data type of a variable in JavaScript. 
// The typeof operator returns a string indicating the type of the operand.
console.log(typeof myfunction); // This will log "function"
// console.log(typeof (typeof)); // This will log "string"