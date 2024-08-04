
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispath = useDispatch();
    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await data.json()
        dispath(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getMovies();
    },[])
}

export default usePopularMovies