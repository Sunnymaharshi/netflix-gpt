import {  useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {    
    const {trailer} = useSelector((store)=>store.movies)
    useMovieTrailer(movie_id);

  return (
    <div className="w-full">
      <iframe
      className="w-full aspect-video"
       
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&loop=1&mute=1&playlist=${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
