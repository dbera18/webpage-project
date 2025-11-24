import React, { useEffect, useState } from 'react'
import movieApi from '../../config/axios';

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
     <h1 className='text-3xl font-bold'>Home Page is fucking good</h1>
     <div className='mt-8 flex items-center justify-between'>
     <h2 className= 'text-2xl'>Popular Movies</h2>
     <button className='test-sm tex-gray-300'>
        See All
     </button>
     </div>
    </div>
  )
}

export default Homepage
