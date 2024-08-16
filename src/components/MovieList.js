import MovieCard from "./MovieCard"

const MovieList = ({category,list}) => {
    if(!list) return;

  return (
    <div className="my-6">
        <h1 className="text-2xl text-white font-bold mb-2">{category}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">

        <div className="flex gap-3">
            {list.map(movie=><MovieCard key={movie.id} image_path={movie.poster_path} title={movie.title}/>)}        
        </div>
        </div>
    </div>
  )
}

export default MovieList