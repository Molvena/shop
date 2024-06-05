
import {Navigate, useOutlet} from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import {CustomAppBar} from "../../components/CustomAppBar"
 //Me importo outlet como useOutlet de ReactRouterDom, que hace lo mismoque el componente outlet
 //Me importo el customHook del contexto useAuth 

export const HomeLayout = () => {
    const {user} = useAuth();
    const outlet = useOutlet();
    //NOs traemos el usuario del useAuth para ver si existe
    //Si existe, no te vengas al homeLayout, lo llevamos a la pagina del profile

    if(user){
        return <Navigate to='/dashboard/profile' replace />;
    }
  return (
    <div>
        <CustomAppBar
         pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" },
          { label: "SignUpPage", path: "/signUp"},
          ]}
        />
      {outlet}

    </div>
  )
}
