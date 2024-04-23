import React, { useState } from "react";
import Chat from "../../chat/Chat";
import { Container } from "@mui/joy";

import AppBar from "../../components/AppBar/AppBar";
const papelUsuario = localStorage.getItem("userRole");

function Home() {
  const token = sessionStorage.getItem("token");
  var tokenPresente;
  console.log(token);

  if (token !== undefined && token !== null && token.length > 0) {
    tokenPresente = true;
    console.log("tem token", typeof(tokenPresente));
  } else {
    tokenPresente = false;
    console.log("nop ");
  }
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
      {tokenPresente ? (
        <AppBar showMenuButton={true} buttonType="sair" />
      ) : (
        <AppBar buttonType="login" />
      )}
      <Chat></Chat>
    </Container>
  );
}

export default Home;
