import Spinner from '../components/spinner';
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templatePages/templateMovieDisplayPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import ToggleFavouriteIcon from '../components/cardIcons/toggleFavourite'

const TopRatedMoviesPage=(props)=>{
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['top_rated'],
    queryFn: getTopRatedMovies,
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
      title="Top Rated"
      movies={movies}
      action={(movie) => {
        return <ToggleFavouriteIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviesPage;