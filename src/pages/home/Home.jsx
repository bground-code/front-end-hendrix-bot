import React, { useState } from "react";
import Chat from "../../chat/Chat";
import { Container } from "@mui/joy";

import AppBar from "../../components/AppBar/AppBar";

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
      <AppBar></AppBar>
      <Chat></Chat>
    </Container>
  );
}

export default Home;
