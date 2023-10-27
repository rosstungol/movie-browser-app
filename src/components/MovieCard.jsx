const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className='col-lg-3 col-md-3 col-2 my-4'>
      <div className='card'>
        <img
          src={posterURL}
          className='card-img-top'
          alt={movie.original_title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{movie.original_title}</h5>
          {/* <p className='card-text'>{movie.overview}</p> */}
          <a href='#' className='btn btn-primary'>
            Show details
          </a>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
