import React from "react";
import { Box, IconButton, Stack, Typography, Button } from "@mui/joy";

import AdbRoundedIcon from "@mui/icons-material/AdbRounded";

function AppBar() {
  return (
    <Box
      bgcolor={"#171AC"}
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
        <IconButton disabled>
          <AdbRoundedIcon />
        </IconButton>
        <Typography>Hendrix-Bot</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" px={2}>
        <Button color="neutral" variant="plain">
          Login
        </Button>
      </Stack>
    </Box>
  );
}

export default AppBar;
