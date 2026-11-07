import React from "react";
import { useParams, Link } from 'react-router';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templatePages/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
import { Button } from "@mui/material";


const MoviePage = (prop) => {
  const { id } = useParams();
  
  const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Link to={`/movies/${movie.id}/recommendations`}>
              <Button variant="outlined" size="medium">
                More Like This
              </Button>
            </Link>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
