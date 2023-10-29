import Hero from "./Hero"
import MovieCard from "./MovieCard"
import BlankSlate from "./BlankSlate"

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`
  const resultsList = searchResults.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />
  })

  if (keyword && searchResults.length === 0) {
    return (
      <>
        <Hero text={title} />
        <BlankSlate
          header='No Results Found'
          body='Sorry, but nothing matched your search terms'
        />
      </>
    )
  }

  return (
    <>
      <Hero text={title} />
      <div className='container'>
        <div className='row'>{resultsList}</div>
      </div>
    </>
  )
}

export default Search
