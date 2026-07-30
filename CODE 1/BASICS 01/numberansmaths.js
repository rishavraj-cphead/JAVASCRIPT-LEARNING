// so numbers and maths
const score=400;
console.log(score);
const balance= new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
const no2=124.545;
console.log(no2.toPrecision(3));

const hundreds=100000;
console.log(hundreds.toLocaleString('en-US'));
// en-in

// ++++++++++++++++++++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-111));
console.log(Math.round(-111.234));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.sqrt(9));
console.log(Math.min(2,3,4,5,3,2,2,11,9));
console.log(Math.max(2,3,4,5,3,2,2,11,9));

// random
console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

