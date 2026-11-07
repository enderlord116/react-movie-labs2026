import Spinner from '../components/spinner';
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templatePages/templateMovieDisplayPage'
import {getPlayingNowMovies} from "../api/tmdb-api";
import ToggleFavouriteIcon from '../components/cardIcons/toggleFavourite'

const PlayingNowMoviesPage=(props)=>{
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['playing_now'],
    queryFn: getPlayingNowMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  return (
    <PageTemplate
      title="Playing Now"
      movies={movies}
      action={(movie) => {
        return <ToggleFavouriteIcon movie={movie} />
      }}
    />
  );
};
export default PlayingNowMoviesPage;