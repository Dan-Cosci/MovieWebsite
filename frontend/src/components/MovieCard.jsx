import React from 'react';
import '../css/MovieCard.css';

const MovieCard = ({movie}) => {
  
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  function onFavourite() {
    alert("Clicked");
  }
  
  const getUrl = async()=>{
    const res = await fetch(`${BASE_URL}${movie.poster_path}`);
  };

  return (
    <div className='movie-card'>
      <div className="movie-poster">
        <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay" >
          <button className='fav-btn' onClick={onFavourite}>&#10084;</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
