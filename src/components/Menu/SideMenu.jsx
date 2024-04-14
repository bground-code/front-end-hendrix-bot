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

function SideMenu() {
  return (
    <Box left={0} p={2} minHeight="100%" bgcolor={"#32383E"} width={{}}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <ForumRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Chat
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <GroupRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Usuários
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <RateReviewRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Gerenciar Hendrix
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <EventRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{ display: { xs: "none", md: "block" } }}>
              Agenda
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
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
