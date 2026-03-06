import React from 'react'
import { useNavigate } from 'react-router'
export function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='shadow-lg py-2 flex justify-between px-5'>
        <h1 className='font-extrabold p-3 text-cyan-500'>
          Restaurante Las 3B
          </h1>
        <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer bg-green-500' onClick={()=>navigate("/")}>Carrito  
        </button>
      </div> 


  )
}
