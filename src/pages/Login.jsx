import React from 'react'
import { useNavigate } from 'react-router'
export function Login() {
    const navigate=useNavigate()
  return (
    <div className=''>
        <h1>Aqui va el LOGIN</h1>
        <input  type="text" className='bg-gray-300' />nombre
    <button className='cursor-pointer bg-gray-900 rounded px-2 ml-4 py-1 text-white flex justify-center items-center' onClick={()=>navigate("/home")}>iniciar secion</button>
    </div>
  )
}
