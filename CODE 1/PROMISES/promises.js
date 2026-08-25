const promise1=new Promise(function(resolve,reject)

{
    //do an async task
    //Db calls ,crytography,network
    setTimeout(function(){
        console.log('Async task is coplete');
        
    },1000)
})
promise1.then(function()
{
    console.log("Promise consumed");
    
})
new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    console.log(
        "Async task 2"
    );
    resolve()
    
},1000)
}).then(function()
{
    console.log("Async 2 resolved");
    
})

const promise3=new Promise(function(resolve,rejct)
{
    setTimeout(function()
{
resolve({username:"Chai",email:"chai@example.com"})

},1000)
})

promise3.then(function(user)
{
console.log("data");

})
const promise4 = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (!error) {
            resolve({
                username: "hitesh",
                password: "123"
            });
        } else {
            reject("ERROR: Something went wrong");
        }

    }, 1000);
});

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(()=>console.log(
        "the promise is either resolved or rejected"
    )
    )

  const promise5 = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (!error) {
            resolve({
                username: "js",
                password: "5262623"
            });
        } else {
            reject("ERROR: Something went wrong");
        }

    }, 1000);
});

async function consumepromisefive() {
    const response=await promise5
    console.log(response);
    
}
consumepromisefive()
async function getallusers() {
   const response=await fetch('')
    const data=esponse.json()
}
console.log(data);
