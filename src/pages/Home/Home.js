import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Container, Box, IconButton, Button } from "@mui/joy";

import Navbar from "../../components/AppBar/AppBar";

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
        bgcolor: "neutral.900",
        height: "100vh",
      }}
    >
      <Navbar></Navbar>
    </Container>
  );
}

export default Home;
