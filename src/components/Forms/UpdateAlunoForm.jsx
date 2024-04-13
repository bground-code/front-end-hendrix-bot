import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Typography,
} from "@mui/joy";

function UpdateAluno() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={2}
      borderRadius={8}
      sx={{
        bgcolor: "#171A1C",
      }}
      columnSpacing={3}
      rowSpacing={1}
      minHeight={470}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography level="h3">Editar:</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={12}>
        <FormControl>
          <FormLabel>Nome completo</FormLabel>
          <Input
            placeholder="Digite o nome"
            size="md"
            variant="plain"
            type="text"
            // value={nome}
            // onChange={handleInputChange(setNome)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={12}>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="Digite o e-mail"
            size="md"
            variant="plain"
            type="email"
            // value={email}
            // onChange={handleInputChange(setEmail)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input
            placeholder="Digite o CPF"
            size="md"
            variant="plain"
            type="text"
            // value={cpf}
            // onChange={handleInputChange(setCpf)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>Data de nascimento</FormLabel>
          <Input
            placeholder="dd/mm/aaaa"
            size="md"
            variant="plain"
            type="text"
            // value={dataNascimento}
            // onChange={handleInputChange(setDataNascimento)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            placeholder="Digite sua senha"
            size="md"
            variant="plain"
            type="password"
            // value={senha}
            // onChange={handleInputChange(setSenha)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>Confirme a senha</FormLabel>
          <Input
            placeholder="Confirme sua senha"
            size="md"
            variant="plain"
            type="password"
            // value={confirmarSenha}
            // onChange={handleInputChange(setConfirmarSenha)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>Contato</FormLabel>
          <Input
            placeholder="Telefone/Whatsapp"
            size="md"
            variant="plain"
            type="text"
            // value={contato}
            // onChange={handleInputChange(setContato)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <FormControl>
          <FormLabel>Responsável</FormLabel>
          <Input
            placeholder="Nome do responsável"
            size="md"
            variant="plain"
            type="text"
            // value={responsavel}
            // onChange={handleInputChange(setResponsavel)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          marginTop={1}
        >
          {/* <Button variant="soft" color="danger" onClick={handleSalvar}>
            Salvar
          </Button> */}
          <Button variant="soft" color="danger">
            Salvar
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UpdateAluno;
