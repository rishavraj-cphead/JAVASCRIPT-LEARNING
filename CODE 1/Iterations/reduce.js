const num=[1,2,3,4,5]

const one=num.reduce(function (acc,curvval){
    console.log(`acc:${acc } and curval${curvval}`);
    
    return acc+curvval
},0)
console.log(one);
