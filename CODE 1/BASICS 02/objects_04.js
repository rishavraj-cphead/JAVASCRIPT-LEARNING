const user={};
user.id=1;
user.name="Rishav";
user.email="rishav@example.com";
console.log(user);
const regularuser={
    full_name:
    function () {
    }
}


const ob1= {1: "one", 2: "two", 3: "three"};
const ob2= {5: "one", 6: "two", 7: "three"};
const ob3=Object.assign({}, ob1, ob2);
console.log(ob3);

const ob4= {1: "one", 2: "two", 3: "three"};
const ob5={...ob1, ...ob2};
console.log(ob5);

const users =[
    {
        id: 1,
        email: "rishav@example.com" 
    }
]
console.log(users[0].email);
console.log(users[0]);
console.log(Object.keys(users[0]));