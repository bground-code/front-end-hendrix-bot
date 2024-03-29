import styled from "styled-components";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Container = styled.div`
  background-color: #1c1917;
  color: #e7e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #292524;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 400;
  color: #e7e5e4;
  margin: 1rem auto 2rem;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #e7e5e4;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: #dc2626;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #e7e5e4;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <Label>Registre-se</Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <LabelSignin>
          Já tem uma conta?
          <Strong>
            <Link to="/">&nbsp;Entre</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  );
};

export default Signup;
