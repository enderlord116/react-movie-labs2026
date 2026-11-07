import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatePages/templateMovieDisplayPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import ToggleFavouriteIcon from "../components/cardIcons/toggleFavourite";

const HomePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['discover'],
    queryFn: getMovies,
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
      title="Discover"
      movies={movies}
      action={(movie) => {
        return <ToggleFavouriteIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;
