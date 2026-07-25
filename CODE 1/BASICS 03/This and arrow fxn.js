const user={
    username:"Rishav",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to the website.`);
        console.log(user);
        

        
    }

}
// user.welcomeMessage()
// user.username="SAM"
// user.welcomeMessage()
console.log(this);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function chai(){
    // let username="hi"
//     console.log(this.username);
    
// }
// chai()

// function me direct this ni chalta
// ----------------------------------------
// chai=function (){
//     let username="hi"
//     console.log(this.username);
    
// }
// chai()

// const chai=()=>{
//     let username="hi"
//     console.log(this);
    
// }
// chai()
const addtwo=(num1,num2)=>(num1+num2)//isko raact me use karenge
// const addtwo=(num1,num2)=>
// {
//     return num1+num2
// }
console.log(addtwo(2,4));
 

