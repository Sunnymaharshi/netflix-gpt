
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpComing } from '../utils/movieSlice'
import { useEffect } from 'react';

const useUpComingMovies = () => {
    const dispath = useDispatch();
    const upComing = useSelector((store)=>store.movies.upComing)
    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
        const json = await data.json()
        dispath(addUpComing(json.results))
    }
    useEffect(()=>{
        !upComing && getMovies();
    },[])
}

export default useUpComingMovies