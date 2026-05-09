import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import {Home,CarritoRunRun,Ticket,Menu,Probando,On,Insup} from '../pages'
import { Layout } from '../layout'

export function Rutas() {
return (
<Routes>
  <Route path='/' element={<On/>}/>
  <Route path='/n' element={<Insup/>}/>
  
<Route path='/probando'element={<Probando/>}/>

<Route element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/menu/:categoria' element={<Menu/>}/>
    <Route path='/ticket' element={<Ticket/>}/>
<Route path='*' element={<Navigate to="/" />}/>
</Route>
</Routes>
  )
}


