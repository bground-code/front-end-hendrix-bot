import React from "react";
import {
  Box,
  Grid,
  Divider,
  ListItem,
  List,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { Margin } from "@mui/icons-material";

function SideMenu() {
  return (
    <Box
      left={0}
      py={3}
      px={{ sm: 2, md: 1 }}
      minHeight="100%"
      bgcolor={"#32383E"}
      width={{ xs: 50, sm: 80, md: 160, lg: 210 }}
    >
      <List sx={{ position: "fixed" }}>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              <ForumRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Chat
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              <GroupRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Usuários
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              <RateReviewRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Gerenciar <br />
              Hendrix
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              <EventRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Agenda
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              <DescriptionRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Relatório
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideMenu;
