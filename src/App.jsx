import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./pages";

//tendre que importarme los componentes protectedLayout y HomeLayout que hacen que 
//segun si existe o no el usuario me redirija a una pagina oa aotra

function App() {
  return (





    
          <Pages />
        //tendre que meter algo como esto con las rutas de las paginas que yo me cree
        //tanto protegidas como no protegidas
        //   <Routes>
        //   <Route element={<HomeLayout />}>
        //     <Route path='/' element={<HomePage />} />
        //     <Route path='/login' element={<LoginPage />} />
        //     <Route path='/register' element={<SignUpPage />} />
        //   </Route>
    
        //   <Route path='/dashboard' element={<ProtectedLayout />}>
        //     <Route path='profile' element={<ProfilePage />} />
        //     <Route path='settings' element={<SettingsPage />} />
        //   </Route>
        // </Routes>




  );
}
export default App;
