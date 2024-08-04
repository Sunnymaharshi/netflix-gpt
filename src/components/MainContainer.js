import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null) return;
    const mainMovie = movies[Math.floor(Math.random()*movies.length)]
    const {original_title,overview, id} = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movie_id={id}/>

        </div>
    )
}

export default MainContainer