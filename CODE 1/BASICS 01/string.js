const name="rishav"; // primitive data type (string) stored in stack memory
const age=25;
console.log(name+" "+age); // This will log "rishav 25"
console.log(`My name is ${name} and I am ${age} years old  .`); // This will log "My name is rishav and I am 25 years old."
const gamename=new String("PUBG-MOBILE"); // non primitive data type (string object) stored in heap memory

console.log(gamename[0]); // This will log "P"
console.log(gamename.__proto__); // This will log the 
// prototype of the string object
console.log(gamename.toUpperCase()); // This will log "PUBG"
console.log(gamename.toLowerCase()); // This will log "pubg"
console.log(gamename.length); // This will log 11
const a=gamename.length;
console.log(a); // This will log 11
console.log(gamename.valueOf()); // This will log "PUBG"
console.log(gamename.charAt(0)); // This will log "P"
console.log(gamename.indexOf("U")); // This will log 1

const newstring=gamename.substring(0,5); // This will log "PUB-"
  console.log(newstring); // This will log "PUBG"
 const useslice=gamename.slice(-8,5); // This will log "PUBG"
  console.log(useslice);

  const newstring1 = "     hitesh      ";
  console.log(newstring1); 
  console.log(newstring1.trim()); // This will log "hitesh"
  const url="https://hitesh.com";
  console.log(url.replace("https","http")); // This will log "http://hitesh.com"
  console.log(url.includes("hitesh")); // This will log true
  console.log(url.startsWith("https")); // This will log true
  console.log(url.endsWith(".com")); // This will log true

  console.log(gamename.split("-")); // This will log ["PUBG", "MOBILE"]
