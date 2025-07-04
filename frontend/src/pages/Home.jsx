import React, { use, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import '../css/Home.css'
import { searchMovie, mostPopular } from '../services/api';

const Home = () => {
  
  const [seachQuery,setSearchQuery] = useState("");
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const loadPopular = async ()=>{
      try {
        const data = await mostPopular();
        setMovies(data);
        console.log(data);
      } catch (error) {console.error("Error loading movies:"+error)}
        finally{setLoading(false);}
    };

    loadPopular();
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!seachQuery.trim()) return;
    if(loading) return;

    setMovies([]);

    setLoading(true);
    try {
      const res = await searchMovie(seachQuery);
      setMovies(res);
    } catch (e) {console.error("Error loading search:"+e)}
      finally{setLoading(false)}
  }

  
  
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder='Search Movie...' 
          className='search-input' 
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button className="search-button" type='submit'>Search</button>
      </form>

      <div className="movies-grid">
        {movies.map(movie=> <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}

export default Home
