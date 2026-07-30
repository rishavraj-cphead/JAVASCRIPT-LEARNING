//high order loops
let a=[1,2,3,4,4,3,2]

for (const val of a) //array or string 
    {
        console.log(val);
        
    
}
//maps
const map=new Map()//unique values
map.set('1','INDIA')
map.set('2','brazil')
map.set('3','san francisco')
for (const [key,value] of map) {
    console.log(key,':-',value);
    
    
}

//object me for loop ni chalega
// uske liye hota hai for any loop
const myobject = {
    1: 'js',
    2: 'cpp',
    3: 'html'
};

for (const key in myobject) {
    console.log(key, myobject[key]);
}
const mycoding=[
    {
     1:'js'
    },
    {
1:'cpp'
    },
    {
1:'mast'
    }
]
mycoding.forEach( (item) => {

console.log(item[1]);

})