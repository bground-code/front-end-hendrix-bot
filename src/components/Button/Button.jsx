import styled from "styled-components";
import React from "react";

const ButtonLayout = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #991b1b;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <ButtonLayout type={Type} onClick={onClick}>
      {Text}
    </ButtonLayout>
  );
};

export default Button;
