import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
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
        columnSpacing={5}
        pt={8}
        sx={{ minHeight: "100vh" }}
        minWidth="100vw"
      >
        <Grid item xs={3} sm={2}>
          <SideMenu />
        </Grid>
        <Grid item xs={8} sm={9}>
          <CreateUsuario />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastrarUsuario;
