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
import AppBar from "../../components/AppBar/AppBarLogged";

function CadastroUsuario() {
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
        bgcolor: "neutral.900",
        height: "100vh",
      }}
    >
      <AppBar></AppBar>
      <Box
        bgcolor={"neutral.800"}
        marginX={"auto"}
        // marginY={"auto"}
        width={"70%"}
        p={2}
        borderRadius={8}
        mt={6}
      >
        <Stack direction="column" spacing={1} mx={2}>
          <Typography level="h3" marginBottom={2}>
            Cadastrar usuários:
          </Typography>
          <FormControl>
            <FormLabel>Nome completo</FormLabel>
            <Input
              placeholder="Digite seu nome"
              size="md"
              variant="plain"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>CPF</FormLabel>
            <Input
              placeholder="Digite seu CPF"
              size="md"
              variant="plain"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="Digite seu e-mail"
              size="md"
              variant="plain"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="Digite sua senha"
              size="md"
              variant="plain"
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirme a senha</FormLabel>
            <Input
              placeholder="Confirme sua senha"
              size="md"
              variant="plain"
              type="password"
            />
          </FormControl>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl>
              <FormLabel>Tipo de usuário:</FormLabel>
              <RadioGroup onChange={handleTipoCadastro}>
                <Stack direction="row" spacing={2}>
                  <Radio
                    label="Administrador"
                    variant="soft"
                    value="admin"
                    color="danger"
                  />
                  <Radio
                    label="Gerente"
                    variant="soft"
                    value="gerente"
                    color="danger"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button variant="soft" color="danger">
              Salvar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
