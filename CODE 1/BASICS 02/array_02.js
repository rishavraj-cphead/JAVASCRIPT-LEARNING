const a=[1,2,3]
const b=[5,6,7];
b.push(a);
console.log(b);
// a.concat(b);
const c=a.concat(b);
console.log(c);

//spread easy method to add two different arrays
// like/
const z=[...a,...b]
console.log(z);
 const p=z.flat(1);
 //mast hai flat usually infinity de do ho jata hai

 console.log(p);

 console.log(Array.isArray("rishav"));
 console.log(Array.from("rishav"));
 console.log(Array.from({name:"rishav"}));
