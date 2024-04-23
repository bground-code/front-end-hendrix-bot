import React, { useState } from "react";
import { Container, Grid } from "@mui/joy";
import AppBar from "../../components/AppBar/AppBar";
import SideMenuGerenciar from "../../components/Menu/SideMenuIntents";

function Home() {
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
        height: "100vh",
      }}
    >
      <AppBar showMenuButton={true} buttonType="menu" />
      <Grid container>
        <Grid item>
          <SideMenuGerenciar />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
