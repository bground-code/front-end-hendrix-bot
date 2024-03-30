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
  Link,
  Typography,
  Alert,
} from "@mui/joy";

function Login() {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: login, senha: senha }),
      });

      if (response.ok) {
        navigate("/home");
        const data = await response.json();
        if (data.tokenDto && data.tokenDto.acessToken) {
          const token = data.tokenDto.acessToken;
          localStorage.setItem("accessToken", token);
        }
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
    }
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
      <Box
        bgcolor={"neutral.800"}
        marginX={"auto"}
        width={"25%"}
        p={3}
        borderRadius={8}
      >
        <Stack direction="column" spacing={2}>
          <Typography textAlign={"center"} level="h3" marginBottom={2}>
            Login
          </Typography>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="Digite seu e-mail"
              size="lg"
              variant="plain"
              type="email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="Digite sua senha"
              size="lg"
              variant="plain"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </FormControl>
          <Button
            variant="soft"
            color="danger"
            aria-label="Entrar"
            size="lg"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          {error && (
            <Alert textAlign={"center"} color="neutral">
              {error}
            </Alert>
          )}
          <Link alignSelf={"center"} color="danger">
            Esqueceu sua senha?
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;