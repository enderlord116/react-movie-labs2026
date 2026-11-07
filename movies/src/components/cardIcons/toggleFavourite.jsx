import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ToggleFavouriteIcon = ({ movie }) => {
  const {favourites, toggleFavourite} = useContext(MoviesContext);

  const handleToggleFavourite = (e) => {
    e.preventDefault();
    toggleFavourite(movie);
    if(favourites.include(movie)){
      movie.favourite = true
    }else{
      movie.favourite = false
    }
  };

  return (
    <IconButton aria-label="toggle favourites" onClick={handleToggleFavourite}>
      {movie.favourite ? <FavoriteIcon sx={{color:"rgb(223, 55, 55)"}}/> : <FavoriteBorderIcon/>}
    </IconButton>
  );
};

export default ToggleFavouriteIcon;
