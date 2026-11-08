import React, { useState } from "react";
import Header from "../header";
import Grid from "@mui/material/Grid";
import CreditGrid from "../creditGrid";

function CastListPageTemplate({credits, title}) {

  let displayedCredits = credits

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <CreditGrid credits={displayedCredits}/>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;
