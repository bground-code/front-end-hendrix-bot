import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Stack, Typography, Button } from "@mui/joy";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import DrawerMenu from "../Menu/DrawerMenu";
import ProfileMenu from "../Menu/ProfileMenu";

function AppBar({ showMenuButton, buttonType }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonType === "login") {
      navigate("/login");
    } else if (buttonType === "voltar") navigate("/home");
  };

  const getButtonIcon = () => {
    if (buttonType === "login") {
      return (
        <Button variant="plain" color="neutral">
          Login
        </Button>
      );
    } else if (buttonType === "voltar") {
      return (
        <Button variant="plain" color="neutral">
          Login
        </Button>
      );
    } else if (buttonType === "menu") {
      return <ProfileMenu />;
    }
  };

  return (
    <Box
      bgcolor={"#171A1C"}
      width={"100%"}
      p={1}
      top={0}
      left={0}
      position="fixed"
      height={80}
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" px={2}>
        {showMenuButton ? <DrawerMenu /> : <Box />}

        <IconButton disabled>
          <AdbRoundedIcon />
        </IconButton>
        <Typography>Hendrix-Bot</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" px={2}></Stack>
    </Box>
  );
}

export default AppBar;
