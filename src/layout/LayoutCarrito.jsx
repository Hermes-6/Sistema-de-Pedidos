import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { MenuLateral } from "../components/MenuLateral";

export function LayoutCarrito() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <MenuLateral />

        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}