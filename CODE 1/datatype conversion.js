let score=undefined// This declares a variable 'score' and assigns it the value undefined
console.log(typeof score) // This will print the type of the variable 'score' to the console, which is "number"
console.log(typeof(score))
let value= Number(score)// This converts the string 'score' to a number and assigns it to the variable 'value'
console.log(value)
//in undefined we can convert it to number, string, boolean, null, object, symbol, bigint but not to undefined because it is already undefined.

// conversions
// "33" => 33
//"33abc" => NaN
//true => 1
//false =>  0
//null => 0
let now=33
let str=String(now) // This converts the number 'now' to a string and assigns it to the variable 'str'
console.log(str) // This will print the value of the variable 'str' to the console, which is "33"
console.log(typeof str) // This will print the type of the variable 'str' to the console, which is "string"

