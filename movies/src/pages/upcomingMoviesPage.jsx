import Spinner from '../components/spinner';
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templatePages/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddtoPlaylistIcon from '../components/cardIcons/addToPlaylist'

const UpcomingMoviesPage = (props) => {
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcomingMovies,
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
      title="Upcoming"
      movies={movies}
      action={(movie) => {
        return <AddtoPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;
