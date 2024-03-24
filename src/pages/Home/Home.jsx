import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2``;

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Home</Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </Container>
  );
};

export default Home;
