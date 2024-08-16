
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispath = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies)
    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await data.json()
        dispath(addPopularMovies(json.results))
    }
    useEffect(()=>{
        !popularMovies && getMovies();
    },[])
}

export default usePopularMovies