import React from 'react'

export default function Email({funemail}) {
  return (
    <div onClick={()=>funemail("dharaneesh@gmail.com")}>Email</div>
  )
}
