import React from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'

export function Navbar() {
  const navigate=useNavigate()
  return (

    <div> 
    <div className='shadow-lg py-2 flex justify-between px-5'>
        <h1 className='font-extrabold p-3 text-cyan-500'>
          Restaurante Las 3B
          </h1>
        <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer bg-green-500' onClick={()=>navigate("/carrito")}>Carrito  
        </button>
      </div> 
<h1>Filtro</h1>
        <button className='cursor-pointer px-2 ml-4 py-1 bg-purple-900 text-white rounded' onClick={()=>navigate("/home")}>menu</button>  
<button className="cursor-pointer px-2 ml-4 py-1 bg-red-500 text-white rounded" onClick={()=> navigate("/bebidas")}>bebidas</button>
    <button className="cursor-pointer px-2 ml-4  py-1 bg-zinc-500 text-white rounded" onClick={()=> navigate("/caseros")}>caseros</button>
  <button className="cursor-pointer px-2  ml-4  py-1 bg-blue-500 text-white rounded" onClick={()=> navigate("/exotico")}>exoticos</button>
  <button className="cursor-pointer px-2 ml-4  py-1 bg-yellow-500 text-white rounded" onClick={()=> navigate("/gourmet")}>gourmet</button>
      </div>
      
  )
}
