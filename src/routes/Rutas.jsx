import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { Bebidas,Caseros,Exotico,Home,Gourmet } from '../pages'

export function Rutas() {
  return (
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/bebidas' element={<Bebidas/>}/>
    <Route path='caseros' element={<Caseros/>}/>
    <Route path='exotico' element={<Exotico/>}/>
    <Route path='gourmet' element={<Gourmet/>}/>
<Route path='*' element={<Navigate to="/" />}/>
</Routes>
  )
}
