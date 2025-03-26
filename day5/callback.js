
//call back hell
function first()
{
    setTimeout(()=>{
        console.log("first");
        setTimeout(()=>{
            console.log("Second");
            setTimeout(()=>{
                console.log("Third");
                 setTimeout(()=>{
                console.log("Third");
                 setTimeout(()=>{
                console.log("Third");
                 setTimeout(()=>{
                console.log("Third");
            },1000)
            },1000)
            },1000)
            
            },1000)
        },2000)
    },3000);
}


first()
