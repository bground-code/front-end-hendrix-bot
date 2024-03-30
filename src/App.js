import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy";
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
