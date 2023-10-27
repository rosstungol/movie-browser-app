import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Search from "./components/Search"
import { getMovieResultsUrl } from "./utils/utils"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    if (searchText) {
      fetch(getMovieResultsUrl(searchText))
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results))
    }
  }, [searchText])

  return (
    <>
      <Navbar searchText={searchText} onSearchTextChange={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/search'
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </>
  )
}

export default App
