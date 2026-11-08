import React from "react";
import Credit from "./creditCard";
import Grid from "@mui/material/Grid";

const CreditGrid = (props) => {
  let creditCards = props.credits.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Credit key={m.id} credit={m}/>
    </Grid>
  ));
  return creditCards;
};

export default CreditGrid;
