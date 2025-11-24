import React, { useEffect, useState } from 'react'
import movieApi from '../../config/axios';
import MovieCard from '../../common/MovieCard';

function Homepage() {
    const [popularMovies, setPopularMovies] = useState([]);
    console.log(popularMovies);
    useEffect(() => {
        movieApi
        .get('/movie/popular')
        .then((res)=> 
        setPopularMovies(res.data.results))
        .catch((err)=>console.log(err));
    },[])
  return (
    <div>
     <h1 className='text-3xl font-bold'>Home Page</h1>
     <div className='mt-8 flex items-center justify-between'>
     <h2 className= 'text-2xl'>Popular Movies</h2>
     <button className='test-sm tex-gray-300'>
        See All
     </button>
     </div>
     <div className='grid grid-cols-5 gap-8 mt-4'>
      {popularMovies.slice(0,10).map((movie) =>(
        <MovieCard kry={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} release_date={movie.release_date}/>
      ))}
    </div>
    </div>
  );
}

export default Homepage
