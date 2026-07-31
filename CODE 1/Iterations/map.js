const newnums=[1,2,3,4,4,5,6,6,6,]

const a=newnums.map((num)=>num+10)
.map((num)=>num*10)
.filter((nu) =>nu>=150)
console.log(a);
