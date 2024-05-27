//Aqui desarrollamos un contexto para manejar el acceso de los usuarios

import { createContext } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom";


// Creamos el contexto de autenticación.
export const AuthContext = createContext();
//Definimos el proveedor de autenticación que envolverá los componentes que necesiten acceso al contexto.
export const AuthProvider = ({children}) => {
// useLocalStorage hook personalizado para gestionar el estado del usuario en el almacenamiento local.
//Le paso como parametros la keyName y el valor por defecto

    const [user, setUser] = useLocalStorage("user", null);
// useNavigate hook de React Router para la navegación programática.

    const navigate = useNavigate();

// Función de login que actualiza el estado del usuario y navega al perfil del usuario.
    const login = async (data) => {
    setUser(data); // Establecemos el usuario en el estado.
    navigate("/dashboard/profile", { replace: true }); // Navegamos al perfil del usuario, reemplazando la ruta actual.
  };

  // Función de logout que limpia el estado del usuario y navega a la página principal.
  const logout = () => {
    setUser(null); // Establecemos el usuario a null en el estado.
    navigate("/", { replace: true }); // Navegamos a la página principal, reemplazando la ruta actual.
  };



}