import { getMovieCredits } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import PageTemplate from '../components/templatePages/templateCreditsPage';
import Spinner from '../components/spinner';

const MovieCreditsPage = (movie) => {
  const { id } = useParams();

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovieCredits,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const credits = data.cast;

   return (
    <PageTemplate
      title="Movie Credits"
      credits={credits}
    />
  );
};
export default MovieCreditsPage;