import { getMovieRecommedations } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import PageTemplate from '../components/templatePages/templateMovieListPage';
import Spinner from '../components/spinner';
import ToggleFavouriteIcon from "../components/cardIcons/toggleFavourite";

const MovieRecommendationsPage = (movie) => {
  const { id } = useParams();

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['recommenadtions', {id: id}],
    queryFn: getMovieRecommedations,
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
      title="Recommendations"
      movies={movies}
      action={(movie) => {
        return <ToggleFavouriteIcon movie={movie} />
      }}
    />
  );
};
export default MovieRecommendationsPage;