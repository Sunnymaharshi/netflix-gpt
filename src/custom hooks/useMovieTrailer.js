import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
const useMovieTrailer = (movie_id) => {
    const dispath = useDispatch();
    const trailerKey = useSelector((store)=>store.movies.trailer)
    const getMovieTrailer = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const trailers = json.results.filter((vid) => vid.type === "Trailer");
        const trailer = trailers.length > 0 ? trailers[0] : json.results[0];
        dispath(addTrailer(trailer.key));
      };
      useEffect(() => {
        !trailerKey && getMovieTrailer();
      }, []);
}

export default useMovieTrailer;