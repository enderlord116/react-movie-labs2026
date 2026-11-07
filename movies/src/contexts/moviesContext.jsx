import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  //Not use if favour of toggleFavourite
  const addToFavourites = (movie) => {
    let newFavourites = [];
    if (!favourites.includes(movie.id)){
      newFavourites = [...favourites, movie.id];
    }
    else{
      newFavourites = [...favourites];
    }
    setFavourites(newFavourites)
  };
  
  //Not use if favour of toggleFavourite
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const toggleFavourite = (movie) => {
    let newFavourites = [];
    if (!favourites.includes(movie.id)){
      newFavourites = [...favourites, movie.id];
    }
    else{
      newFavourites = [...favourites.filter(
        (mId)=>mId!==movie.id
      )];
    }
    setFavourites(newFavourites)
  };

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        toggleFavourite,
        playlist,
        addToPlaylist,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
