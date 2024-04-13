import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Typography,
  Alert,
  RadioGroup,
  Radio,
} from "@mui/joy";
import AppBar from "../../components/AppBar/AppBar";
import CreateUsuario from "../../components/Forms/CreateUsuarioForm";

function CadastrarUsuario() {
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
        <CreateUsuario></CreateUsuario>
      </Box>
    </Container>
  );
}

export default CadastrarUsuario;
