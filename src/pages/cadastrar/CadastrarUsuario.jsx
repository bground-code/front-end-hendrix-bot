import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Stack, Grid } from "@mui/joy";
import AppBar from "../../components/AppBar/AppBar";
import CreateUsuario from "../../components/Forms/CreateUsuarioForm";
import SideMenu from "../../components/Menu/SideMenu";

function CadastrarUsuario() {
  const [tipoUsuario, setTipoUsuario] = useState("");

  return (
    <Container
      maxWidth={false}
      disableGutters
      component="main"
      role="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0B0D0E",
        minHeight: "100vh",
      }}
    >
      <AppBar showMenuButton={true} buttonType="menu" />
      <Grid
        container
        direction="row"
        columnGap={{ xs: 3, sm: 5, md: 4, lg: 6, xl: 8 }}
        pt={8}
        sx={{ minHeight: "100vh" }}
        minWidth="100vw"
      >
        <Grid item>
          <SideMenu />
        </Grid>
        <Grid item>
          <CreateUsuario />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastrarUsuario;
