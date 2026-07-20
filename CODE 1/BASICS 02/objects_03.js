//singleton

// object literals
// Object.create know as constructor method coontains singleton
const mysm=Symbol("key1")

const jsuser={

    name: "Rishav",
  [mysm]:"mykey1",
  age: 18,
  email:"rishav@gmail.com",
  isok:true,
  myarr:[1,2],
  greeting(){
    console.log("hello");
  }
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysm]);

jsuser.email ="hitesh@gmail.com"
Object.freeze(jsuser)

jsuser.greeting();



