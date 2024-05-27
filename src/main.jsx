import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>    
  </React.StrictMode>,
)
