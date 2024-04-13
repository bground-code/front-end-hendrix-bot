import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/joy";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import ProfileMenu from "../Menu/ProfileMenu";
import DrawerMenu from "../Menu/DrawerMenu";

function AppBar() {
  return (
    <Box
      bgcolor={"#171A1C"}
      width={"100%"}
      p={2}
      top={0}
      left={0}
      position="fixed"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <DrawerMenu />

          <IconButton disabled>
            <AdbRoundedIcon />
          </IconButton>
          <Typography>Hendrix-Bot</Typography>
        </Stack>
        <ProfileMenu />
      </Stack>
    </Box>
  );
}

export default AppBar;
