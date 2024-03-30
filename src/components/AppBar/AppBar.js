import React from "react";
import { Box, IconButton, Stack, Typography, Button } from "@mui/joy";

import AdbRoundedIcon from "@mui/icons-material/AdbRounded";

function Navbar() {
  return (
    <Box
      bgcolor={"neutral.800"}
      width={"100%"}
      p={1}
      top={0}
      left={0}
      position="fixed"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <IconButton disabled>
            <AdbRoundedIcon />
          </IconButton>
          <Typography>Hendrix-Bot</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Button color="neutral" variant="plain">
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navbar;
