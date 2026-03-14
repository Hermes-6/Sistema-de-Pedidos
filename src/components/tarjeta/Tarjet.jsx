import { useContext } from 'react'
import { Descripcion } from '../Card/Descripcion'
import { Carro } from '../../context'
import { Trash2} from "lucide-react";

export function Tarjet({producto}) {
  const{nombre,jpn,precio,cantidad}=producto
const {borrarTodo} =useContext(Carro)
  return (
    
    <div className='flex gap-3 bg-gray-100 rounded-xl p-3 items-center'>
      <img src={jpn} className='w-16 h-16 rounded-lg object-cover'/>
      <div className='flex-1'>
<h3 className='font-semibold text-sm'>
{nombre}
</h3>
<span className='text-xs text-gray-500'>
${precio} c/u
</span>
   <span className='text-xs text-blue-500 block '>
          Cantidad:{cantidad}
        </span>
        <span className='text-sm font-semibold text-green-600'>subtotal:{precio*cantidad}</span>
      </div>
      <button className='text-red-500 hover:text-red-700 text-lg' onClick={()=>{borrarTodo()}}><Trash2 size={20}/></button>
    </div>
    
  )
}

