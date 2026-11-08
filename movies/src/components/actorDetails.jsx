import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { ListItemText } from "@mui/material";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const slot = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!

  return (
    <>
      <List>
        <ListItemText primary="Name: " secondary={actor.name}/>
        <Divider/>
        <ListItemText primary="Gender: " secondary={actor.gender}/>
        <Divider/>
        <ListItemText primary="Date of Birth: " secondary={actor.birthday}/>
        <Divider/>
        <ListItemText primary="Place of Birth: " secondary={actor.place_of_birth}/>
      </List>
      <Typography variant="h6" component="h3">
        Biography
      </Typography>
      <Typography variant="subtitle1" component="p">
        {actor.biography}
      </Typography>
    </>
  );
};
export default ActorDetails;
