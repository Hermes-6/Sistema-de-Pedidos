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

// import React from "react";
// import { Outlet } from "react-router-dom";
// import { MenuLateral } from "../components/MenuLateral";

// export function Layout() {
//   return (
//     <div className="flex">
//       <MenuLateral />

//       <main className="flex-1 p-6 bg-gray-100 min-h-screen">
//         <Outlet />
//       </main>
//     </div>
//   );
// }