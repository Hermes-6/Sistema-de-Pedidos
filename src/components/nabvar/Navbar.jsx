import React from 'react'
import { LogOut, User, Menu } from 'lucide-react';

import { useNavigate } from 'react-router'
export function Navbar({toggleCart}) {
  const navigate=useNavigate()
 
    const usuario = JSON.parse(localStorage.getItem("usuario"));

   const userName = usuario?.nombre;

 return (
<>
    <div> 
    <div className='shadow-lg py-2 flex justify-between px-5'>
        <h1 className='font-extrabold p-3 text-cyan-500'>
          Restaurante Las 3B
          </h1>

        
        <div className="flex items-center gap-3 lg:gap-6">
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="text-right xs:block">
            <p className="text-sm font-bold text-slate-700 leading-none">Bienvenido: {userName}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-gray-200">
            <User size={20} className="text-slate-500" />
          </div>
          <button onClick={() => navigate("/")} 
          className="p-2 text-gray-400 hover:text-red-500 transition-all">
            <LogOut size={20} />
          </button>
          <button className='rounded-full py-2 px-3 text-xs font-bold cursor-pointer bg-green-500' onClick={toggleCart}>Carrito  
        </button>
        </div>
      </div>
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



</>
  )
}
