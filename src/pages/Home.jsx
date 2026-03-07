import { useNavigate } from "react-router"
import { Carta } from "../components"
import { Comidas } from "../data"

export function Home() {
    const navigate = useNavigate()
  return (
    <>
  
    <div className="min-h-screen  flex justify-center items-center ">
      {Comidas.map(x => (
        <Carta producto={x} 
        />
      ))}
  
  </div>
    </>

  )
}


    