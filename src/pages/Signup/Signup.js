// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import {
//   Radio,
//   RadioGroup,
//   Box,
//   Input,
//   Container,
//   Stack,
//   Button,
//   FormLabel,
//   FormControl,
//   Link,
//   Typography,
//   TextField,
// } from "@mui/joy";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [senhaConf, setSenhaConf] = useState("");
//   const [tipoCadastro, setTipoCadastro] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const { signup } = useAuth();

//   const handleTipoCadastro = (e) => {
//     setTipoCadastro(e.target.value);
//   };

//   const handleSignup = () => {
//     if (!email | !senha | !senhaConf | !tipoCadastro) {
//       setError("Preencha todos os campos");
//       return;
//     } else if (senha !== senhaConf) {
//       setError("As senhas não são iguais");
//       return;
//     }

//     const res = signup(email, senha);

//     if (res) {
//       setError(res);
//       return;
//     }

//     alert("Usuário cadatrado com sucesso!");
//     navigate("/");
//   };

//   return (
//     <Container
//       maxWidth={false}
//       sx={{
//         bgcolor: "background.body",
//         height: "100vh",
//         alignContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: "35%",
//           bgcolor: "neutral.800",
//           mx: "auto",
//           p: 3,
//           display: "flex",
//         }}
//       >
//         <Stack>
//           <FormControl error>
//             <RadioGroup onChange={handleTipoCadastro}>
//               <Radio
//                 value="aluno"
//                 label="Aluno(a)"
//                 size="md"
//                 inputProps={{ "aria-label": "aluno" }}
//               />
//               <Radio
//                 value="adm"
//                 label="Colaborador(a)"
//                 size="md"
//                 inputProps={{ "aria-label": "colaborador" }}
//               />
//             </RadioGroup>
//           </FormControl>
//           <FormLabel>E-mail:</FormLabel>
//           <Input
//             type="email"
//             placeholder="Digite seu E-mail"
//             value={email}
//             variant="plain"
//             size="lg"
//           />
//           <FormLabel>Senha:</FormLabel>
//           <Input
//             type="password"
//             placeholder="Digite sua senha"
//             value={senha}
//             variant="plain"
//             size="lg"
//           />
//           <FormLabel>Confirme a senha:</FormLabel>
//           <Input
//             type="password"
//             placeholder="Confirme sua senha"
//             value={senhaConf}
//             variant="plain"
//             size="lg"
//           />
//           <Button
//             onClick={handleSignup}
//             variant="soft"
//             color="danger"
//             aria-label="Registrar"
//           >
//             Registrar
//           </Button>
//           <Stack direction="row" spacing={2}>
//             <Typography level="body-md">Já tem uma conta?</Typography>
//             <Link color="danger">Entre</Link>
//           </Stack>
//         </Stack>
//       </Box>
//     </Container>
//   );
// };

// export default Signup;
