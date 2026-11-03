import Spinner from '../components/spinner';
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templateMovieListPage'
import {getPlayingNowMovies} from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'

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
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default PlayingNowMoviesPage;