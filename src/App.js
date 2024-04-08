import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import { dark } from "@mui/material/styles/createPalette";

const App = () => (
  <AuthProvider>
    <CssVarsProvider defaultMode="dark">
      <RoutesApp />
      <GlobalStyle />
    </CssVarsProvider>
  </AuthProvider>
);

export default App;
