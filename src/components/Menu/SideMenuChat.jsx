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
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";

function SideMenuChat() {
  return (
    <Box
      left={0}
      py={3}
      px={{ sm: 2, md: 1 }}
      minHeight="100%"
      bgcolor={"#32383E"}
      width={{ xs: 50, sm: 80, md: 160, lg: 210 }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <List sx={{ position: "fixed" }}>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Chat
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Usuários
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Gerenciar <br />
              Hendrix
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Agenda
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Relatório
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideMenuChat;
