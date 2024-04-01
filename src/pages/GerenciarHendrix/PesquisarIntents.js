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
  RadioGroup,
  Radio,
} from "@mui/joy";
import AppBar from "../../components/AppBar/AppBarLogged";
import SideMenu from "../../components/Menu/SideMenuAdmin";

function PesquisarIntents() {
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
        maxHeight: "100vh",
      }}
    >
      <AppBar></AppBar>
      <SideMenu></SideMenu>
      <Box
        bgcolor={"neutral.800"}
        marginX={"auto"}
        // marginY={"auto"}
        width={"75%"}
        p={2}
        borderRadius={8}
        mt={6}
      >
        <Stack direction="column" spacing={1} mx={2}>
          <Typography level="h3" marginBottom={2}>
            Buscar Intenções:
          </Typography>
          <FormControl>
            <Input
              placeholder="buscar..."
              size="md"
              variant="plain"
              type="text"
            />
          </FormControl>
        </Stack>
      </Box>
    </Container>
  );
}

export default PesquisarIntents;
