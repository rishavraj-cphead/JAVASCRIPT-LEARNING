//there are two types of memory allocation in programming: stack and heap.
// stack is for primitive (copy of value) data types
//heap is for non primitive reference types


// examples
let name="rishav"; // primitive data type (string) stored in stack memory
let age=25; // primitive data type (number) stored in stack memory
//ek ke upar ek store hota hai stack mein
let anothername=name; 
anothername="badshah"; // anothername is a copy of name, stored in stack memory
console.log(name);
console.log(anothername);

let user={
    name:"rishav", // non primitive data type (object) stored in heap memory
    uid:123456
}
let anotheruser=user; // anotheruser is a reference to user, stored in stack memory
anotheruser.name="badshah";
console.table([user, anotheruser]); // This will log "badshah" because both user and anotheruser reference the same object in heap memory