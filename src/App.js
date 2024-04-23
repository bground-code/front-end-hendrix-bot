import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { dark } from "@mui/material/styles/createPalette";

const App = () => (
  <CssVarsProvider defaultMode="dark">
    <RoutesApp />
    <GlobalStyle />
  </CssVarsProvider>
);

export default App;
