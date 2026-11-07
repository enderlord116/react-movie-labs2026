import { getActors } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import PageTemplate from '../components/templatePages/templateCastListPage';
import Spinner from '../components/spinner';

const MovieCastPage = (movie) => {
  const { id } = useParams();

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['actor', {id: id}],
    queryFn: getActors,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const actors = data.cast;

   return (
    <PageTemplate
      title="Cast"
      actors={actors}
    />
  );
};
export default MovieCastPage;