import React from "react";
import {
  Box,
  Stack,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/joy";

function SideMenu() {
  return (
    <Box bgcolor={"#32383E"} left={0} width={"20%"} p={2} minHeight="100%">
      <Box mt={12}>
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
    </Box>
  );
}

export default SideMenu;
