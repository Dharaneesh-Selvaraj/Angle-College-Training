import React, { useState } from 'react'
import AddToCartBtn from './Usestate'
import Cart from './Cart';

export default function Mobile() {
  const [selectmob,setmobile] = useState();
  let mobiles=[
    {
      id:1,
      brand:"Samsung",
      price:68999,
      image:"https://th.bing.com/th/id/OIP.seDkZ7w_josZda-_44JlyQHaE8?rs=1&pid=ImgDetMain"
    },
    {
      id:2,
      brand:"Apple",
      price:68999,
      image:"https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/09/iphone-16-hero.jpg"
    },
    {
      id:3,
      brand:"Realme",
      price:68999,
      image:"https://i.gadgets360cdn.com/large/1_1716202811999.png"
    }
  ]
  return (
    <div className='flex justify-evenly flex-wrap'>
      {
        mobiles.map((data)=>
          <div className="card bg-amber-100 text-black w-96 shadow-sm">
            <figure>
              <img
                src={data.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.brand}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <AddToCartBtn />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
