import React from 'react'

export function Navbar() {
  return (
    
    <div className='flex justify-between px-5'>
        <h1 className='font-extrabold p-3 text-cyan-500'>
          Restaurante Las 3B
          </h1>
        <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer'>Carrito</button>
      </div>
  )
}
