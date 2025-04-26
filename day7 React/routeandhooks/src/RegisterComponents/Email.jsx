import React from 'react'
import { IoIosMail } from "react-icons/io";

export default function Email({funpg,setemail}) {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <form className='border w-fit p-[100px] bg-blue-950 rounded-2xl'>
        <div className='border-2 w-[300px] rounded-md'>
          <div className='inline-block flex-col justify-center'>
            <IoIosMail className='inline size-6'/>
          </div>
          <input className='focus:outline-0 focus:border-0 ' type="email" placeholder='Email Address' onChange={(event)=>setemail(event.target.value)}/>
        </div> 
          <button onClick={()=>funpg(false)} className='bg-amber-300 text-black w-[100px] rounded-md'>Next</button>
      </form>
    </div>
  )
}
