const mynums=[1,2,3,4,5,6,7,8,0]
// const newnums=mynums.filter((num)=>{return num > 4});
   
    const newnums=[]
    mynums.forEach((num)=>{
        if(num>4)
        {
            newnums.push(num)
        }
    })
 console.log(newnums);
    

