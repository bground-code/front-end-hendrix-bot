import React from "react";
import { Box, Grid, Divider, ListItem } from "@mui/joy";

function SideMenu() {
  return (
    <Box left={0} p={2} minHeight="100%" bgcolor={"#32383E"}>
      <Grid container spacing={1} columnSpacing={1}>
        <Grid item xs={12} mt={12}>
          <ListItem sx={{ marginY: 1 }}>Chat's</ListItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ListItem sx={{ marginY: 1 }}>Usuários</ListItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ListItem sx={{ marginY: 1 }}>Gerenciar Hendrix</ListItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ListItem sx={{ marginY: 1 }}>Agenda</ListItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ListItem sx={{ marginY: 1 }}>Relatórios</ListItem>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SideMenu;
