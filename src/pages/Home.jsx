import { useNavigate } from "react-router"
import { Carta } from "../components"
import { Comidas } from "../data"
import{useState,useEffect}from"react"
import Apidatos from "../service/Apidatos"
export function Home() {
    const [comida,setComidas]=useState([]);

const navigate=useNavigate();
const datosDB=async()=>{
  const comidasdb=await Apidatos.getDatos();
  setComidas(comidasdb.data);
  console.log(comidasdb.data)
}

useEffect(()=>{
  datosDB()
},[])

  return (
    <div className="bg-gray-200 min-h-screen p-6"> 
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {comida.map(x => (
        <Carta key={x._id} producto={x} 
        />
      ))}
  
  </div>
    </div>

  )
}


    