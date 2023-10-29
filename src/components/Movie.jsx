import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero from "./Hero"

const Movie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f112456204d06b0cd5c500363b2e0cd0&languange=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text='Loading...' />
    }
    if (movieDetails) {
      return <Hero text={movieDetails.original_title} />
    }
  }
  return renderMovieDetails()
}

export default Movie
