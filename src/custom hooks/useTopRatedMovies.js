
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRated } from '../utils/movieSlice'
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispath = useDispatch();
    const topRated = useSelector((store)=>store.movies.topRated)
    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
        const json = await data.json()
        dispath(addTopRated(json.results))
    }
    useEffect(()=>{
        !topRated && getMovies();
    },[])
}

export default useTopRatedMovies