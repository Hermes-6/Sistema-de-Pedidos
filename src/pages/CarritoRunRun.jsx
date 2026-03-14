import React, { useContext } from 'react'
import { Carro } from '../context'
import { Tarjet } from '../components'

export function CarritoRunRun({isOpen,toggleCart}) {
const {carr} = useContext(Carro)
console.log(carr)

  return (
<aside className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform
transition-transform duration-300 ${isOpen ? "translate-x-0":"translate-x-full"}`}>
<div className='p-4 border-b flex justify-between'>

  <h2 className='text-lg font-bold'>Carrito</h2>
  <button onClick={toggleCart}>X</button>
    </div>
<div className='p-4 space-y-4 overflow-y-auto '>

{carr.map(x => (<Tarjet key={x.id} producto={x}/> ))
}
</div>

    </aside>
  )
}
