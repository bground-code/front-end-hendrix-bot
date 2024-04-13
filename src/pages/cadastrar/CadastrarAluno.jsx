import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { Container, Stack, Box } from "@mui/joy";
import AppBar from "../../components/AppBar/AppBarLogged.js";
import CreateAluno from "../../components/Forms/CreateAlunoForm.jsx";

function CadastrarAluno() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="main"
      role="main"
      bgcolor="dark.background.level3"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0B0D0E",
        minHeight: "100vh",
      }}
    >
      <AppBar></AppBar>
      <Box width="80%" mt={{ xs: 12, sm: 6, md: 6 }}>
        <CreateAluno></CreateAluno>
      </Box>
    </Container>
  );
}

export default CadastrarAluno;
