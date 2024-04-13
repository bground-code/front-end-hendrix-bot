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

function SideMenuGerenciar() {
  return (
    <Box left={0} width={"20%"} p={2} minHeight="100%" bgcolor={"neutral.700"}>
      <Box mt={12}>
        <List>
          <ListItem sx={{ marginY: 1 }}>
            <ListItemButton>Chat's</ListItemButton>
          </ListItem>
          <ListItem sx={{ marginY: 1 }}>
            <ListItemButton>Usuários</ListItemButton>
          </ListItem>
          <ListItem sx={{ marginY: 1 }}>
            <ListItemButton>Gerenciar Hendrix</ListItemButton>
          </ListItem>
          <ListItem sx={{ marginY: 1 }}>
            <ListItemButton>Agenda</ListItemButton>
          </ListItem>
          <ListItem sx={{ marginY: 1 }}>
            <ListItemButton>Relatórios</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideMenuGerenciar;
