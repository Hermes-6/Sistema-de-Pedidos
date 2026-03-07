import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { Bebidas,Caseros,Exotico,Home,Gourmet,Login,CarritoRunRun} from '../pages'
import { Layout } from '../layout'

export function Rutas() {
return (
<Routes>
  <Route path='/' element={<Login/>}/>
<Route element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/bebidas' element={<Bebidas/>}/>
    <Route path='/caseros' element={<Caseros/>}/>
    <Route path='/exotico' element={<Exotico/>}/>
    <Route path='/gourmet' element={<Gourmet/>}/>
    <Route path='/carrito' element={<CarritoRunRun/>}/>    
<Route path='*' element={<Navigate to="/" />}/>
</Route>
</Routes>
  )
}
