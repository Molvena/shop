import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CustomAppBar } from "../CustomAppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    console.log("no hay usuario logueado")
    return <Navigate to='/' />;
  }

  return (
    <div>
       <CustomAppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
        ]}
      />
      {outlet} 
    </div>
  );
};
