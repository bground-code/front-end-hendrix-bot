import React, { useState } from "react";
import Chat from "../../chat/Chat";
import { Container } from "@mui/joy";

import AppBar from "../../components/AppBar/AppBar";
const userLogado = localStorage.getItem("userLogado");

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
      {userLogado ? (
        <AppBar showMenuButton={true} buttonType="sair" />
      ) : (
        <AppBar showMenuButton={false} buttonType="login" />
      )}
      <Chat></Chat>
    </Container>
  );
}

export default Home;
