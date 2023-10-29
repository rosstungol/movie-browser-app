import { Link } from "react-router-dom"
import blankMovieImage from "../assets/blank-movie-image.jpg"

const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className='col-lg-3 col-md-3 col-2 my-4'>
      <div className='card'>
        {movie.poster_path ? (
          <img
            src={posterURL}
            className='card-img-top'
            alt={movie.original_title}
          />
        ) : (
          <img
            src={blankMovieImage}
            className='card-img-top'
            alt={movie.original_title}
          />
        )}

        <div className='card-body'>
          <h5 className='card-title'>{movie.original_title}</h5>
          <Link to={detailUrl} className='btn btn-primary'>
            Show details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
