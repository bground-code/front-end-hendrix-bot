// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import { Input } from "@mui/joy";
// import Button from "@mui/material/Button";

// export const Container = styled.div`
//   background-color: #1c1917;
//   color: #e7e5e4;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 10px;
//   height: 100vh;
// `;

// export const Content = styled.div`
//   gap: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 100%;
//   box-shadow: 0 1px 2px #0003;
//   background-color: #292524;
//   max-width: 350px;
//   padding: 20px;
//   border-radius: 5px;
// `;

// export const Label = styled.label`
//   font-size: 24px;
//   font-weight: 400;
//   color: #e7e5e4;
//   margin: 1rem auto 2rem;
// `;

// export const LabelSignup = styled.label`
//   font-size: 16px;
//   color: #e7e5e4;
// `;

// export const LabelError = styled.label`
//   font-size: 14px;
//   color: #dc2626;
// ;

// export const Strong = styled.strong`
//   cursor: pointer;

//   a {
//     text-decoration: none;
//     color: #e7e5e4;
//   }
// `;

// // data.tokenDto.acessToken = undefined;
// const Signin = () => {
//   const { signin } = useAuth();
//   const navigate = useNavigate();

//   const [login, setLogin] = useState("");
//   const [senha, setSenha] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://localhost:8081/auth/login", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ login: login, senha: senha }),
//       });

//       if (response.ok) {
//         navigate("/home");
//         const data = await response.json();
//         // const token = data.tokenDto.acessToken;
//         //   localStorage.setItem("acessToken", token)
//         // console.log(data)
//       } else {
//         const data = await response.json();
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error("Erro ao fazer login:", error);
//       setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
//     }
//   };

//   const handleEmailChange = (e) => {
//     setLogin(e.target.value);
//     setError("");
//   };

//   const handleSenhaChange = (e) => {
//     setSenha(e.target.value);
//     setError("");
//   };

//   return (
//     <Container>
//       <Content>
//         <Label>Login</Label>
//         <Input
//           type="text"
//           placeholder="Digite seu E-mail"
//           value={login}
//           onChange={handleEmailChange}
//         />
//         <Input
//           type="password"
//           placeholder="Digite sua Senha"
//           value={senha}
//           onChange={handleSenhaChange}
//         />
//         <LabelError>{error}</LabelError>
//         <Button variant="contained" onClick={handleLogin}>
//           Entrar
//         </Button>

//         <LabelSignup>
//           Não tem uma conta?
//           <Strong>
//             <Link to="/signup">&nbsp;Registre-se</Link>
//           </Strong>
//         </LabelSignup>
//       </Content>
//     </Container>
//   );
// };

// export default Signin;
