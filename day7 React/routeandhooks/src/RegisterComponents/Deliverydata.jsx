import React from 'react'
import { IoIosMail } from "react-icons/io";

export default function Deliverydata({myfun,setuser,setphno,setaddress,setpass}) {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
          <form className='border w-fit p-[100px] bg-blue-950 rounded-2xl'>
            <div className='border-2 w-[300px] rounded-md'>
              <div className='inline-block flex-col justify-center'>
                <IoIosMail className='inline size-6'/>
              </div>
              <input className='focus:outline-0 focus:border-0 ' type="text" placeholder='User Name' onChange={(event)=>setuser(event.target.value)}/>
            </div> 
            <div className='border-2 w-[300px] rounded-md'>
              <div className='inline-block flex-col justify-center'>
                <IoIosMail className='inline size-6'/>
              </div>
              <input className='focus:outline-0 focus:border-0 ' type="text" placeholder='phone number' onChange={(event)=>setphno(event.target.value)}/>
            </div> 
            <div className='border-2 w-[300px] rounded-md'>
              <div className='inline-block flex-col justify-center'>
                <IoIosMail className='inline size-6'/>
              </div>
              <input className='focus:outline-0 focus:border-0 ' type="text" placeholder='Address' onChange={(event)=>setaddress(event.target.value)}/>
            </div> 
            <div className='border-2 w-[300px] rounded-md'>
              <div className='inline-block flex-col justify-center'>
                <IoIosMail className='inline size-6'/>
              </div>
              <input className='focus:outline-0 focus:border-0 ' type="password" placeholder='Password' onChange={(event)=>setpass(event.target.value)}/>
            </div> 
            <div className='border-2 w-[300px] rounded-md'>
              <div className='inline-block flex-col justify-center'>
                <IoIosMail className='inline size-6'/>
              </div>
              <input className='focus:outline-0 focus:border-0 ' type="password" placeholder='Confirm Password' />
            </div> 
              <button onClick={myfun} className='bg-amber-300 text-black w-[100px] rounded-md'>Submit</button>
          </form>
        </div>
  )
}
