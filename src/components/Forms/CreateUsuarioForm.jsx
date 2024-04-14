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

function CreateUsuario() {
  const [tipoCadastro, setTipoCadastro] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [contatoWpp, setContatoWpp] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };
  const handleContatoWpp = (e) => {
    setContatoWpp(e.target.value);
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
      columnSpacing={3}
      rowSpacing={1}
      minHeight={470}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography level="h3" marginBottom={2}>
          Cadastrar usuário:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={12}>
        <FormControl>
          <FormLabel required>Nome completo</FormLabel>
          <Input
            placeholder="Digite seu nome"
            size="md"
            variant="plain"
            type="text"
            value={nome}
            onChange={handleNomeChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={12}>
        <FormControl>
          <FormLabel required>CPF</FormLabel>
          <Input
            placeholder="Digite seu CPF"
            size="md"
            variant="plain"
            type="text"
            value={cpf}
            onChange={handleCpfChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel required>Telefone/WhatsApp</FormLabel>
          <Input
            placeholder="Digite seu número para contato (WhatsApp)"
            size="md"
            variant="plain"
            type="text"
            value={contatoWpp}
            onChange={handleCpfChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel required>E-mail</FormLabel>
          <Input
            placeholder="Digite seu e-mail"
            size="md"
            variant="plain"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel required>Senha</FormLabel>
          <Input
            placeholder="Digite sua senha"
            size="md"
            variant="plain"
            type="password"
            value={senha}
            onChange={handleSenhaChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel required>Confirme a senha</FormLabel>
          <Input
            placeholder="Confirme sua senha"
            size="md"
            variant="plain"
            type="password"
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={11}>
        <FormControl>
          <FormLabel required>Tipo de usuário:</FormLabel>
          <RadioGroup
            onChange={handleTipoCadastro}
            value={tipoCadastro}
            defaultValue="admin"
          >
            <Stack direction="row" spacing={2}>
              <Radio
                label="Administrador(a)"
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
              <Radio
                label="Aluno(a)"
                variant="soft"
                value="aluno"
                color="danger"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={1} md={1} lg={1} alignSelf="flex-end">
        <Button variant="soft" color="danger" onClick={handleSalvar}>
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
}

export default CreateUsuario;
