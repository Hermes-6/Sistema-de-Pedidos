import React from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { Home, ShoppingCart, Coffee,Trash2} from "lucide-react";
import { Carro } from '../../context';
export function Navbar({toggleCart}) {
  const navigate=useNavigate()
  const {borrarTodo} = useContext(Carro)
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
      <div className='max-w-7xl mx-auto px-6 py-8'>

<h1 className="text-gray-600 font-medium">
          Filtrar por categoría:
        </h1>
        
        <button className='bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300' onClick={()=>navigate("/home")}>menu</button>  
<button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300" onClick={()=> navigate("/bebidas")}>bebidas</button>
    <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300" onClick={()=> navigate("/caseros")}>caseros</button>
  <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300" onClick={()=> navigate("/exotico")}>exoticos</button>
  <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300" onClick={()=> navigate("/gourmet")}>gourmet</button>
      </div>
      </div>
      
  )
}
