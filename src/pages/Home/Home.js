import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  Box,
  IconButton,
  Textarea,
  Typography,
  Card,
} from "@mui/joy";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";

import AppBar from "../../components/AppBar/AppBar";

function Home() {
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
        bgcolor: "#0B0D0E",
        height: "100vh",
      }}
    >
      <AppBar></AppBar>

      <Box
        bgcolor={"#171A1C"}
        marginX={"auto"}
        width={"70%"}
        height={"70%"}
        p={2}
        borderRadius={8}
        mt={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <Card variant="soft" color="neutral">
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
        <Textarea
          minRows={2}
          variant="plain"
          placeholder="Digite sua dúvida..."
          endDecorator={
            <IconButton variant="solid" size="lg" sx={{ ml: "auto" }}>
              <SendRoundedIcon />
            </IconButton>
          }
        />
      </Box>
    </Container>
  );
}

export default Home;
