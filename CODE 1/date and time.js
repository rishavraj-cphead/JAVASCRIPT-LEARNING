//date and time
//   date

let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
let mycreateddate=  new Date(2023,1,12,5,3)
console.log(mycreateddate.toDateString());


let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(Math.floor(mytimestamp/1000));
// `$(new)`

// newDate.toLocaleString('default',{
//     weekday:"long"
// })
