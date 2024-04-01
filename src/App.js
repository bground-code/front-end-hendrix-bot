import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

const App = () => (
  <AuthProvider>
    <CssVarsProvider>
      <RoutesApp />
      <GlobalStyle />
    </CssVarsProvider>
  </AuthProvider>
);

export default App;
