import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Stack, Typography, Button } from "@mui/joy";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";

import LogoutButton from "../Buttons/LogoutButton";

function AppBar({ showMenuButton, buttonType }) {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/home");
  };

  const handleButtonClick = () => {
    if (buttonType === "login") {
      navigate("/login");
    } else if (buttonType === "voltar") navigate("/home");
  };

  const getButton = () => {
    if (buttonType === "login") {
      return (
        <Button variant="plain" color="neutral" onClick={handleButtonClick}>
          Login
        </Button>
      );
    } else if (buttonType === "voltar") {
      return (
        <Button variant="plain" color="neutral" onClick={handleButtonClick}>
          Voltar
        </Button>
      );
    } else if (buttonType === "sair") {
      return <LogoutButton />;
    }
  };

  return (
    <Box
      bgcolor={"#171A1C"}
      width={"100%"}
      p={2}
      top={0}
      left={0}
      position="fixed"
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
      zIndex={1000}
    >
      <Stack direction="row" alignItems="center" px={2}>
        <Button variant="plain" color="neutral" onClick={handleHomeButton}>
          <IconButton disabled>
            <AdbRoundedIcon />
          </IconButton>
          <Typography>Hendrix-Bot</Typography>
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" px={2}>
        {getButton()}
      </Stack>
    </Box>
  );
}

export default AppBar;
