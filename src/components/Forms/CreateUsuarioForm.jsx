import React, { useState } from "react";
import axios from "axios";
import InfoIcon from "@mui/icons-material/Info";
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
  FormHelperText,
  Alert,
} from "@mui/joy";
import { LocalGasStationRounded, Token } from "@mui/icons-material";

function CreateUsuario() {
  const [tipoCadastro, setTipoCadastro] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [contatoWpp, setContatoWpp] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setError(false);
  };

  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
    setError(false);
  };

  const handleTipoCadastro = (e) => {
    setTipoCadastro(e.target.value);
  };

  const confirmarSenhaEqual = () => {
    return senha === confirmarSenha;
  };

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSalvar = async () => {
    console.log(localStorage.getItem("accessToken"));

    if (!confirmarSenhaEqual()) {
      setError(true);
      setErrorMessage("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axiosInstance.post("/cadastrar", {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        contatoWpp: contatoWpp,
        papelUsuario: tipoCadastro,
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        setSucesso(true);
      } else {
        console.error("Erro ao fazer o cadastro:");
      }
    } catch (error) {
      console.error("Erro ao fazer o cadastro:");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={2}
      borderRadius={8}
      mt={{ xs: 3 }}
      mb={2}
      sx={{
        bgcolor: "#171A1C",
      }}
      columnSpacing={3}
      rowSpacing={1}
      minHeight={500}
      width={{ xs: 300, sm: 500, md: 710, lg: 900, xl: 1300 }}
      left={0}
    >
      <Grid item xs={12} sm={6} md={6} lg={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography level="h3" marginBottom={2}>
            Cadastrar usuário:
          </Typography>
          {sucesso && (
            <Alert color="success" startIcon={<InfoIcon />}>
              Usuário cadastrado com sucesso!
            </Alert>
          )}
        </Stack>
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
            onChange={handleContatoWpp}
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
          {error && <FormHelperText>{errorMessage}</FormHelperText>}
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
          {error && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <FormControl>
          <FormLabel required>Tipo de usuário:</FormLabel>
          <RadioGroup
            onChange={handleTipoCadastro}
            value={tipoCadastro}
            defaultValue="admin"
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Radio
                label="Administrador(a)"
                variant="soft"
                value="ADMIN"
                color="danger"
              />
              <Radio
                label="Gerente"
                variant="soft"
                value="GERENTE"
                color="danger"
              />
              <Radio
                label="Aluno(a)"
                variant="soft"
                value="ALUNO"
                color="danger"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={1} md={1} lg={1} mr={{ md: 5, lg: 2, xl: 0 }}>
        <Button variant="soft" color="danger" onClick={handleSalvar}>
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
}

export default CreateUsuario;
