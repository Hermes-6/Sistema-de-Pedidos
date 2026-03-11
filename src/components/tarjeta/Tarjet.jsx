import { Descripcion } from '../Card/Descripcion'

export function Tarjet({producto}) {
  const{nombre,jpn,precio,cantidad}=producto

  return (
    
    <div className='w-80 bg-white rounded-xl shadow-md overflow-hidden'>
      <img src={jpn} className='w-full h-25 object-cover'/>
      <div className='p-4'>
        <Descripcion titulo={nombre} elprecio={precio}/>
   <span className='text-sm text-blue-500 block mt-2'>
          Cantidad:{cantidad}
        </span>
        <span>subtotal:{precio*cantidad}</span>
      </div>
    </div>
    
  )
}

