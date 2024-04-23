import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/joy";
import AppBar from "../../components/AppBar/AppBar";
import UpdateUsuario from "../../components/Forms/UpdateUsuarioForm";

function EditarUsuario() {
  const [tipoCadastro, setTipoCadastro] = useState("");

  const handleTipoCadastro = (e) => {
    setTipoCadastro(e.target.value);
  };
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
      <Box width={"80%"} mt={6}>
        <UpdateUsuario></UpdateUsuario>
      </Box>
    </Container>
  );
}

export default EditarUsuario;
