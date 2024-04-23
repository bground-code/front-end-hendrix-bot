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
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";

function SideMenuAdmin() {
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

export default SideMenuAdmin;
