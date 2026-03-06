import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'


export function Layout() {
  return (
    <>
<Navbar/>
<Outlet/>
</>
)
}
