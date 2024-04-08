import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
} from "@mui/joy";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function AppBar() {
  const [open, setOpen] = React.useState(false);
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
          <React.Fragment>
            <IconButton variant="plain" onClick={() => setOpen(true)}>
              <MenuRoundedIcon />
            </IconButton>
            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                "--Drawer-transitionDuration": open ? "0.4s" : "0.2s",
                "--Drawer-transitionFunction": open
                  ? "cubic-bezier(0.79,0.14,0.15,0.86)"
                  : "cubic-bezier(0.77,0,0.18,1)",
              }}
            >
              <Box role="presentation" sx={{ p: 2 }}>
                <List>
                  <ListItem sx={{ marginY: 1 }}>
                    <ListItemButton>Chat's</ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ marginY: 1 }}>
                    <ListItemButton>Usuários</ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ marginY: 1 }}>
                    <ListItemButton>Gerenciar Hendrix</ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ marginY: 1 }}>
                    <ListItemButton>Agenda</ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ marginY: 1 }}>
                    <ListItemButton>Relatórios</ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </React.Fragment>

          <Stack direction="row" alignItems="center">
            <IconButton disabled>
              <AdbRoundedIcon />
            </IconButton>
            <Typography>Hendrix-Bot</Typography>
          </Stack>
        </Stack>
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
      </Stack>
    </Box>
  );
}

export default AppBar;
