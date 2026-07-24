function calculatecartprice( ...num1){  //val1,val2 le jaega 200 aur 30 aur jo bacha wo num
  return num1
}
console.log(calculatecartprice(200,30,133));


const user={
    username:"Rishav",
    price:69
}

function handleobject(anyobject){
  console.log(`The username is ${anyobject.username} and price of his specs is ${anyobject.price} .`);
  
}
handleobject(user)

const newarr=[1,23,3,4,5,4]
function returnsecond(getarray){
    return getarray[1]+getarray[3]
}
console.log(returnsecond(newarr));
