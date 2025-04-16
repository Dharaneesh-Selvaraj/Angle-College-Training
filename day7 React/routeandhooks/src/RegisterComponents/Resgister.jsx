import React, { useState } from 'react'
import Email from './Email'
import Deliverydata from './Deliverydata'

export default function Resgister() {
  let [email,setemail] = useState('empty');
  console.log(email)
  return (
    <div>
      <Email funemail={setemail}/>
      <Deliverydata />
    </div>
  )
}
