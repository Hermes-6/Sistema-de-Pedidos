import { useNavigate } from "react-router"
import {Navbar} from "../components"
import { Carta } from "../components"
import { Comidas } from "../data"

export function Home() {
    const navigate = useNavigate()
  return (
    <>
    <h1>Filtro</h1>

    <div><div className="">
  <button className="cursor-pointer px-2 ml-4 py-1 bg-red-500 text-white rounded" onClick={()=> navigate("/bebidas")}>principal</button>
    <button className="cursor-pointer px-2 ml-4  py-1 bg-zinc-500 text-white rounded" onClick={()=> navigate("/caseros")}>exotico</button>
  <button className="cursor-pointer px-2  ml-4  py-1 bg-blue-500 text-white rounded" onClick={()=> navigate("/exotico")}>caviar</button>
  <button className="cursor-pointer px-2 ml-4  py-1 bg-yellow-500 text-white rounded" onClick={()=> navigate("/gourmet")}>bebidas</button>
  <button className="cursor-pointer px-2 ml-20  py-1 bg-cyan-500 text-white rounded">postres</button>
</div>

    <div className="min-h-screen  flex justify-center items-center ">
      {Comidas.map(x => (
        <Carta 
          producto={x} 
        />
      ))}
  
  </div></div>
    </>

  )
}


    