import React from "react";
import {
  IconButton,
  Stack,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
} from "@mui/joy";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function ProfileMenu() {
  return (
    <Stack direction="row" alignItems="center">
      <Dropdown>
        <MenuButton variant="plain">
          <IconButton>
            <AccountCircleRoundedIcon />
          </IconButton>
        </MenuButton>

        <Menu>
          <MenuItem>Configurações</MenuItem>
          <MenuItem>Sair</MenuItem>
        </Menu>
      </Dropdown>
    </Stack>
  );
}

export default ProfileMenu;
