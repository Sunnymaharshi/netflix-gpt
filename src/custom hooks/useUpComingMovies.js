
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpComing } from '../utils/movieSlice'
import { useEffect } from 'react';

const useUpComingMovies = () => {
    const dispath = useDispatch();
    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
        const json = await data.json()
        dispath(addUpComing(json.results))
    }
    useEffect(()=>{
        getMovies();
    },[])
}

export default useUpComingMovies