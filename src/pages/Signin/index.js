import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

data.tokenDto.acessToken = undefined;
const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8081/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: login, senha: senha }),
      });

      if (response.ok) {
        navigate('/home');
        const data = await response.json();
       // const token = data.tokenDto.acessToken;
     //   localStorage.setItem("acessToken", token)
        console.log(data)

      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  };


  const handleEmailChange = (e) => {
    setLogin(e.target.value);
    setError("");
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
    setError("");
  };

  return (
      <C.Container>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <C.Content>
          <Input
              type="login"
              placeholder="Digite seu E-mail"
              value={login}
              onChange={handleEmailChange}
          />
          <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={handleSenhaChange}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
  );
};

export default Signin;
