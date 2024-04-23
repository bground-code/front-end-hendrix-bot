import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
} from "@mui/joy";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
  return (
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
    </Stack>
  );
}

export default DrawerMenu;
