import Hero from "./Hero"

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  return (
    <>
      <Hero text={title} />
    </>
  )
}

export default Search
