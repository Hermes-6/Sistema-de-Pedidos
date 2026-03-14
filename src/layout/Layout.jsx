import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'
import { CarritoRunRun } from '../pages/CarritoRunRun'

export function Layout() {
  const [openCart,setOpenCart]=useState(false)

  const toggleCart =()=>{
    setOpenCart(!openCart)
  }
  return (
    <>
<Navbar toggleCart={toggleCart}/>
<CarritoRunRun isOpen={openCart} toggleCart={toggleCart}/>
<Outlet/>
</>
)
}

