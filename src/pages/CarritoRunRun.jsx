import React, { useContext } from 'react'
import { Carro } from '../context'
import { Tarjet } from '../components'
import { useNavigate } from 'react-router'
import ApiTicket from '../service/ApiTicket'

export function CarritoRunRun({isOpen,toggleCart}) {
const {carr, borrarTodo}= useContext(Carro)
  
const navigate=useNavigate()
const guardarPedido =async()=>{
  //calcular total
  const total=carr.reduce((acc,item)=>{
    return acc + (item.precio * item.cantidad)
  },0)

  //crear 
  const pedido={
    productos:carr,
    total:total
  };
  //mandar carr
await ApiTicket.crearDatos(pedido);
  //vaciar carrito
  borrarTodo();
  //navegar
  navigate("/ticket");
}


  return (
<aside className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform
transition-transform duration-300 ${isOpen ? "translate-x-0":"translate-x-full"}`}>
<div className='p-4 border-b flex justify-between'>

  <h2 className='text-lg font-bold'>Carrito</h2>
  <button onClick={toggleCart}>X</button>
    </div>
<div className='p-4 space-y-4 overflow-y-auto '>

{carr.map(x => (<Tarjet key={x._id} producto={x}/> ))
}

</div>
<>
<button onClick={guardarPedido}>Ticket</button>
</>
    </aside>

)
}
