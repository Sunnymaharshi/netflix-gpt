import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../custom hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpComingMovies from '../custom hooks/useUpComingMovies'
import useTopRatedMovies from '../custom hooks/useTopRatedMovies'
import usePopularMovies from '../custom hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {


    const showGPT = useSelector(store=>store.gpt.showGPT)
    useNowPlayingMovies()
    usePopularMovies()
    useUpComingMovies()
    useTopRatedMovies()

  return (
    <div className=''>
        <Header/>
        {showGPT ? <GPTSearch/> :
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </>
        }
    </div>
  )
}

export default Browse