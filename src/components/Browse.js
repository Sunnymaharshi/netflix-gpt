import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../custom hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpComingMovies from '../custom hooks/useUpComingMovies'
import useTopRatedMovies from '../custom hooks/useTopRatedMovies'
import usePopularMovies from '../custom hooks/usePopularMovies'

const Browse = () => {


    
    useNowPlayingMovies()
    usePopularMovies()
    useUpComingMovies()
    useTopRatedMovies()

  return (
    <div className=''>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse