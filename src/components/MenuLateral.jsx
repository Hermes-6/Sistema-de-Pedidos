import React from "react";
import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Coffee } from "lucide-react";

export function MenuLateral() {
  const menuItems = [
    { name: "Home", path: "/home", icon: <Home size={20} /> },
    { name: "Bebidas", path: "/bebidas", icon: <Coffee size={20} /> },
    { name: "Caseros", path: "/caseros", icon: <Coffee size={20} /> },
    { name: "Exotico", path: "/exotico", icon: <Coffee size={20} /> },
    { name: "Gourmet", path: "/gourmet", icon: <Coffee size={20} /> },
    { name: "Carrito", path: "/carrito", icon: <ShoppingCart size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Mi Sistema</h1>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}