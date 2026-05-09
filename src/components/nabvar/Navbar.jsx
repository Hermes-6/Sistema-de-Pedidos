import React from 'react'
import { useNavigate } from 'react-router'
export function Navbar({toggleCart}) {
  const navigate=useNavigate()
  return (

    <div> 
    <div className='shadow-lg py-2 flex justify-between px-5'>
        <h1 className='font-extrabold p-3 text-cyan-500'>
          Restaurante Las 3B
          </h1>
          <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer bg-red-500' onClick={()=>navigate("/")}>
            cerrar sesion
          </button>
        <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer bg-green-500' onClick={toggleCart}>Carrito  
        </button>
      </div>
      <div className='bg-gray-200 w-full'>
      <div className='flex gap-3 flex-wrap max-w-7xl mx-auto px-6 py-8'>

<h1 className="text font-medium">
          Filtrar por categoría:
        </h1>
        
        <button className='bg-white px-4 py-2 rounded-full text-sm ' onClick={()=>navigate("/home")}>menu</button>  
<button className="bg-white px-4 py-2 rounded-full text-sm " onClick={()=> navigate("/menu/bebidas")}>bebidas</button>
    <button className="bg-white px-4 py-2 rounded-full text-sm " onClick={()=> navigate("/menu/caseros")}>caseros</button>
  <button className="bg-white px-4 py-2 rounded-full text-sm " onClick={()=> navigate("/menu/Exotico")}>Exoticos</button>
  <button className="bg-white px-4 py-2 rounded-full text-sm " onClick={()=> navigate("/menu/gourmet")}>gourmet</button>
      </div>
      </div>
        </div> 

  )
}
