import React from "react";
import { useParams, Link } from 'react-router';
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templatePages/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
import { Button } from "@mui/material";


const ActorPage = (prop) => {
  const { id } = useParams();
  
  const { data: actor, error, isPending, isError  } = useQuery({
    queryKey: ['actor', {id: id}],
    queryFn: getActor,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            <Link to={`/actor/${actor.id}/movie_credits`}>
              <Button variant="outlined" size="medium">
                Cast
              </Button>
            </Link>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;
