import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorGrid";

function CastListPageTemplate({actors, title}) {

  let displayedActors = actors

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <ActorList actors={displayedActors}/>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;
