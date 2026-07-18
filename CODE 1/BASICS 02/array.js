//array

let myArr =[1,2,3,4,5,6];
let myheros=["rishav","raj"]
console.log(myArr[0]);
  
myArr.push(56);
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift(9);
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr=myArr.join();
console.log(myArr);
console.log(typeof (newArr));

//slice

console.log(myArr.slice(1,3));

// /splice
console.log(myArr.splice(1,3));
console.log(myArr);
// array change ho jata hai
