import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function AllUserComponents() {
  return (
    <div>
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
