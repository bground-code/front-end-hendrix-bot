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
  Typography,
  Alert,
  Grid,
} from "@mui/joy";
import AppBar from "../../components/AppBar/AppBarLogged";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";

function CadastroAluno() {
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
      <AppBar></AppBar>
      <Box
        bgcolor={"neutral.800"}
        marginX={"auto"}
        width={"70%"}
        p={2}
        borderRadius={8}
        mt={6}
      >
        <Stack direction="column" spacing={1} mx={2}>
          <Typography level="h3" marginBottom={2}>
            Cadastrar aluno:
          </Typography>
          <FormControl>
            <FormLabel required>Nome completo</FormLabel>
            <Input
              placeholder="Digite seu nome"
              size="md"
              variant="plain"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel required>E-mail</FormLabel>
            <Input
              placeholder="Digite seu e-mail"
              size="md"
              variant="plain"
              type="email"
            />
          </FormControl>
          <Grid container direction={"row"} columnGap={4}>
            <Grid>
              <FormControl>
                <FormLabel required>CPF</FormLabel>
                <Input
                  placeholder="Digite seu CPF"
                  size="md"
                  variant="plain"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <FormLabel required>Data de nascimento</FormLabel>
                <Input
                  placeholder="dd/mm/aaaa"
                  size="md"
                  variant="plain"
                  type="text"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction={"row"} columnGap={4}>
            <Grid>
              <FormControl>
                <FormLabel required>Senha</FormLabel>
                <Input
                  placeholder="Digite sua senha"
                  size="md"
                  variant="plain"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <FormLabel required>Confirme a senha</FormLabel>
                <Input
                  placeholder="Confirme sua senha"
                  size="md"
                  variant="plain"
                  type="password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction={"row"} columnGap={4}>
            <Grid>
              <FormControl>
                <FormLabel>Contato</FormLabel>
                <Input
                  placeholder="Telefone/Whatsapp"
                  size="md"
                  variant="plain"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <FormLabel>Responsável</FormLabel>
                <Input
                  placeholder="Nome do responsável"
                  size="md"
                  variant="plain"
                  type="text"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Button variant="soft" color="danger">
              Salvar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default CadastroAluno;
