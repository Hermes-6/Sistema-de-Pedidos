import React from 'react'
import { Carta } from "../components"
import {useParams} from"react-router";
import {useState,useEffect}from"react"
import Apidatos from '../service/Apidatos';
import { useNavigate } from 'react-router';

export  function Menu() {
    const [comida,setComidas]=useState([]);

    const navigate=useNavigate();
const datosDB=async()=>{
  const comidasdb=await Apidatos.getDatos();
  setComidas(comidasdb.data);
  console.log(comidasdb.data)
}
//ago lo mismo que en home pero con rutasdinamicas
useEffect(()=>{
  datosDB()
},[])
    const {categoria}=useParams();
  return (
    <div className='bg-gray-200 min-h-screen p-6'> 

    <div className='grid grid-cols-1 
    sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 gap-6 '> 
 {comida.filter(x => x.categoria===categoria).map(x=>
        <Carta key={x._id} producto={x} 
        />)}
    </div>
    </div>

  )
}
