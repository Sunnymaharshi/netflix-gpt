import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
        <div className='mx-5 -mt-[300px] relative z-30'>
        <MovieList category={"Now Playing"} list={movies?.nowPlayingMovies}/>
        <MovieList category={"Popular"} list={movies?.popularMovies}/>
        <MovieList category={"Up Coming"} list={movies?.upComing}/>
        <MovieList category={"Top Rated"} list={movies?.topRated}/>
        </div>
    </div>
  )
}

export default SecondaryContainer