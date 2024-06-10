// components/Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Drawer,
  Badge,
  ButtonBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../cart";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth"

const Header = () => {
  // Estado para controlar la apertura y cierre del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); // Aquí puedes manejar la lógica de búsqueda
  };

  // Función para togglear el carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
// Le pones el estado contrario al que tenga
  
const {user, logout} = useAuth();
 


  return (
    <>
         <AppBar position="static">
        <Toolbar>
          {/* Botón del menú */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título de la tienda */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Tienda
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOLA {user.name}
          </Typography>
          <NavLink to="/">
          <Button 
            variant="text"
            color="inherit"
          >
            HOME
          </Button>
          </NavLink>

          {/* Barra de búsqueda */}
          <TextField
            id="search-bar"
            className="text"
            onChange={handleSearchInput}
            label="Buscar productos"
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
          />
          <NavLink to="/login">
          {!user &&(
          <Button 
            variant="text"
            color="inherit"
          >LOGIN
          </Button>
          )}
          </NavLink>

          <NavLink to="/">
            {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
           {user &&(
          <Button 
            variant="text"
            color="inherit"
            onClick={logout}
          >LOGOUT
          </Button>
          )}
          </NavLink>

          <NavLink to="dashboard/settings">
            {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
           {user &&(
          <Button 
            variant="text"
            color="inherit"
          >SETTINGS
          </Button>
          )}
          </NavLink>

          <NavLink to="dashboard/profile">
            {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
           {user &&(
          <Button 
            variant="text"
            color="inherit"
          >PROFILE
          </Button>
          )}
          </NavLink>

          {/* Icono de cuenta de usuario */}
          <NavLink to="/signUp">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
           
          >
            <AccountCircle />
          </IconButton>
          </NavLink>

          {/* Icono del carrito de compras */}
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={1} color="secondary">
              {" "}
              {/* Dinamiza esta cantidad según el estado del carrito */}
              <ShoppingCartIcon className="shake-animation" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <Cart closeCart={toggleCart} />
      </Drawer>
    </>
  );
};

export default Header;
