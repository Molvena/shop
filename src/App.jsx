import "./App.css";
import Pages from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context";

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <CartProvider>
          <Pages />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
