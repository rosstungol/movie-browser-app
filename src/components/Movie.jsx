import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero from "./Hero"

const Movie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    console.log("make an api request", id)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f112456204d06b0cd5c500363b2e0cd0&languange=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
      })
  }, [id])
  return (
    <>
      <Hero text={movieDetails.original_title} />
    </>
  )
}

export default Movie
