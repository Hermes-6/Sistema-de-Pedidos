import React from 'react'
import { createContext,useState} from 'react'
//creo el contexto
export const Carro=createContext()
//la funcion
export function CarritoContext({children}) {
//creo el arreglo del carro donde va a estar mis compras añadir es para modificar
// y en usestate[] por que pues va a empezar vacio
    const [carr,añadir]=useState([])
    //aqui empizan las condiciones y funciones :c
//creo la variable añadircarro y usare producto y el numeroaactual    
const añadirCarro=(producto,numeroactual)=>{
    //si es 0 no hace nada por que pues no hay nada para agregar xd
if(numeroactual<1){

}else{
    //si no es 0 pues si hay algo
    //creo existe para saber si existe x es el producto que entra
    //  y lo checa por id ya que es mas facil si id es igual a producto id 
    //osea si ya esta pue
    //y use some por que lo voy a usar como condicion y some regresa booleans 
  const existe=carr.some(x=>x.id===producto.id)
  //si es true hace
if(existe){
    //creo si la variable y adentro uso el map y checo el arr del carr 
    //y le pongo una condicion si ya existe que agregue nomas la cantidad
 const si=carr.map(x=>{
    if(x.id===producto.id){
        return {...x,cantidad:x.cantidad + numeroactual}
   //y si no existe que agregue el producto entero
    }else{
        return x
    }
 
})
//esto es el else de si es 0 si si tiene algo pues que aga toda las 
// condicion de arriba y ya si sumo o metio pues que lo meta 
 añadir(si)
//si no existe pues que lo agregue todo con la cantidad
     }else{
    añadir([...carr,{...producto,cantidad:numeroactual}])
        
        }
    }

//falta boton para eliminar todo y boton para eliminar cantidad

}
//esto es para envolver el contexto en toda la app
return (
<Carro.Provider value={{carr,añadirCarro}}>
    {children}
</Carro.Provider>
)
}
