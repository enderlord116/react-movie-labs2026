import Spinner from '../components/spinner';
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templatePages/templateMovieDisplayPage'
import { getPopularMovies } from "../api/tmdb-api";
import ToggleFavouriteIcon from '../components/cardIcons/toggleFavourite'

const PopularMoviesPage=(props)=>{
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
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
      title="Popular"
      movies={movies}
      action={(movie) => {
        return <ToggleFavouriteIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;