import { IMAGE_CDN } from "../utils/constants"

const MovieCard = ({image_path}) => {
 
  return (
    <div className="w-[200px]">
        <img className="w-[200px]" src={IMAGE_CDN+image_path} alt="xyz"/>
    </div>
  )
}

export default MovieCard