//nested scope

function one()
{
    const username ="hitesh"
    function two ()
    {
        const website="youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username ="hitesh"
    if(username ==="hitesh")
    {
        const website ="uoutube"
        console.log(username+website);
        
    }
    console.log(website);
    
}
console.log(username);

// /icecream tricks
// choto bada se mang skta hai but vice versa not true