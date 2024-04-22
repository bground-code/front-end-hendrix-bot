import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack, Box } from "@mui/joy";
import AppBar from "../../components/AppBar/AppBar";
import CreateAluno from "../../components/Forms/CreateAlunoForm.jsx";
import CreateUsuario from "../../components/Forms/CreateUsuarioForm.jsx";

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
      <AppBar buttonType="menu" />
      <Box width="80%" mt={{ xs: 12, sm: 6, md: 6 }}>
        <CreateAluno></CreateAluno>
      </Box>
    </Container>
  );
}

export default CadastrarAluno;
