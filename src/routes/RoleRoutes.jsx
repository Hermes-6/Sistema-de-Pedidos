import { Navigate } from "react-router-dom";

export function RoleRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("usuario"));

  // si no hay usuario → login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // si el rol no coincide → lo mandas al menú
  if (role && user.rol !== role) {
    return <Navigate to="/home" />;
  }

  return children;
}