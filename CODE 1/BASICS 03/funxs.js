//functions

function saymyname(){
console.log("H");
console.log("E");
console.log("l");
console.log("l");
console.log("o");

}

// saymyname

function addtwonumbers(number1 ,number2){//number1 and 2 are parameter 
   let result =number1+number2
   return result
   
}
addtwonumbers(3,"a") //3 and a are arguement
addtwonumbers(3,null)
const result=addtwonumbers(2,3)
console.log(result);

function loginuser(username){

    if(!username)
        {console.log("please enter a username")
    return}
    return `${username} just logged in`
}
console.log(loginuser("hitesh"));
console.log(loginuser());


