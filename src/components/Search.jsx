import Hero from "./Hero"
import MovieCard from "./MovieCard"

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`
  const resultsList = searchResults.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />
  })

  return (
    <>
      <Hero text={title} />
      {resultsList && (
        <div className='container'>
          <div className='row'>{resultsList}</div>
        </div>
      )}
    </>
  )
}

export default Search
