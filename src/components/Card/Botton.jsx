import React, { useContext,useState } from 'react'
import { Carro } from '../../context';



export function Botton({producto}) {
  const {añadirCarro} = useContext(Carro)
 const[numeroactual, cambiarnumero] = useState(0)
 const mas=()=>cambiarnumero(x=>x +1);
 const menos=()=>{
  if(numeroactual>0){
    cambiarnumero(x=>x-1);
  }
 }
 

  return (
    
<div className='flex items-center gap-3 mt-4'>
  <button className='cursor-pointer px-3 py-1 bg-red-500 text-white rounded'onClick={menos}> -1 </button>
  <span className='text-lg font-bold'>{numeroactual}</span>
  <button className='cursor-pointer px-3 py-1 bg-green-500 text-white rounded' onClick={mas}>   +1 </button>
<button className='bg-violet-600' onClick={()=>{añadirCarro(producto,numeroactual),cambiarnumero(0)}}>agregar</button>
</div>
  )
}
