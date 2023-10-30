import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero from "./Hero"

const Movie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f112456204d06b0cd5c500363b2e0cd0&languange=en-US`
        )
        if (response.ok) {
          const data = await response.json()
          setMovieDetails(data)
          setIsLoading(false)
        } else {
          console.log("Failed to fetch data")
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text='Loading...' />
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className='container my-5'>
            <div className='row'>
              <div className='col-md-3'>
                <img
                  src={posterPath}
                  alt='...'
                  className='img-fluid shadow rounded'
                />
              </div>
              <div className='col-md-9'>
                <h2>{movieDetails.original_title}</h2>
                <p className='lead'>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return renderMovieDetails()
}

export default Movie
