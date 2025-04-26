import React, { useEffect, useState } from 'react'
import Email from './Email'
import Deliverydata from './Deliverydata'

export default function Resgister() {
  const [page,setpage] = useState(true);
  const [email,setemail] = useState('');
  const [phnum,setphno] = useState('');
  const [username,setuser] = useState('');
  const [address,setaddress] = useState('');
  const [password,setpass] = useState('');


  useEffect(()=>{
    console.log("Render");
  },[page])
  const displaydata =(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(phnum);
    console.log(address);
    console.log(password);
    
  }
  return (
    <div>
      {
        page ?
        <Email funpg={setpage} setemail={setemail}/>:
        <Deliverydata myfun={displaydata} setuser={setuser} setphno={setphno} setaddress={setaddress} setpass={setpass}/>
      }
      
    </div>
  )
}
