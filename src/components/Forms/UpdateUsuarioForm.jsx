import React, { useState } from "react";
import {
  Grid,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/joy";

function UpdateUsuario() {
  const [tipoCadastro, setTipoCadastro] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const handleTipoCadastro = (e) => {
    setTipoCadastro(e.target.value);
  };

  const handleSalvar = () => {
    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("E-mail:", email);
    console.log("Senha:", senha);
    console.log("Confirmar senha:", confirmarSenha);
    console.log("Tipo de cadastro:", tipoCadastro);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={2}
      borderRadius={8}
      mt={6}
      mb={2}
      sx={{
        bgcolor: "#171A1C",
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Stack direction="column" spacing={1} mx={2}>
          <Typography level="h3" marginBottom={2}>
            Cadastrar usuário:
          </Typography>
          <FormControl>
            <FormLabel>Nome completo</FormLabel>
            <Input
              placeholder="Digite seu nome"
              size="md"
              variant="plain"
              type="text"
              value={nome}
              onChange={handleNomeChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>CPF</FormLabel>
            <Input
              placeholder="Digite seu CPF"
              size="md"
              variant="plain"
              type="text"
              value={cpf}
              onChange={handleCpfChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="Digite seu e-mail"
              size="md"
              variant="plain"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="Digite sua senha"
              size="md"
              variant="plain"
              type="password"
              value={senha}
              onChange={handleSenhaChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirme a senha</FormLabel>
            <Input
              placeholder="Confirme sua senha"
              size="md"
              variant="plain"
              type="password"
              value={confirmarSenha}
              onChange={handleConfirmarSenhaChange}
            />
          </FormControl>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl>
              <FormLabel>Tipo de usuário:</FormLabel>
              <RadioGroup
                onChange={handleTipoCadastro}
                value={tipoCadastro}
                defaultValue="admin"
              >
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
            <Button variant="soft" color="danger" onClick={handleSalvar}>
              Salvar
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UpdateUsuario;
