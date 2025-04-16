import React, { useState } from 'react'

export default function AddToCartBtn() {

    const [count,setcount] = useState(0);

    const decrement = ()=>{
      count==0 ? setcount(0) : setcount(count-1); 
    }

    function inc()
    {
       setcount(count+1);
    }
    
  return (
    <div>
      <button className="btn btn-success" onClick={decrement}>Dec</button>
      {
      count>0 ? <button className="btn btn-primary">{count}</button>: 
      <button className="btn btn-primary">AddToCart</button>
      }
      
      <button className="btn btn-success" onClick={()=>setcount(count+1)}>Inc</button>
        
    </div>

  )
}
