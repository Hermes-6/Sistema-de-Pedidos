import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import {Home,CarritoRunRun,Ticket,Menu,Probando,On,Insup} from '../pages'
import { Layout } from '../layout'
import { AdminLayouts,Header,MenuAD,PanelAd,NewCard } from '../admin'
import { RoleRoute } from './RoleRoutes'
import { EditCard } from "../admin/EditCard";
export function Rutas() {

  const loadLayout=(Layout,Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }


  return (


<Routes>
<Route
  path='/new'
  element={
    <RoleRoute role="admin">
      <NewCard/>
    </RoleRoute>
  }
/>

<Route
  path='/edit/:id'
  element={
    <RoleRoute role="admin">
      <EditCard/>
    </RoleRoute>
  }
/>

<Route
  path='/admin'
  element={
    <RoleRoute role="admin">
      {loadLayout(AdminLayouts, PanelAd)}
    </RoleRoute>
  }
/>  
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


