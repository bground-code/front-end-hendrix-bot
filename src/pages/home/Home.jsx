import React, { useState } from "react";
import Chat from "../../chat/Chat";
import { Container } from "@mui/joy";

import AppBar from "../../components/AppBar/AppBar";
const papelUsuario = localStorage.getItem("userRole");

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
      {papelUsuario ? (
        <AppBar buttonType="sair" />
      ) : (
        <AppBar buttonType="login" />
      )}
      <Chat></Chat>
    </Container>
  );
}

export default Home;
