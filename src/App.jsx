import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Search from "./components/Search"
import Movie from "./components/Movie"
import BlankSlate from "./components/BlankSlate"
import { getMovieResultsUrl } from "./utils/utils"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (searchText) {
        try {
          const response = await fetch(getMovieResultsUrl(searchText))
          if (response.ok) {
            const data = await response.json()
            setSearchResults(data.results)
          } else {
            console.error("Failed to fetch data")
          }
        } catch (error) {
          console.error("An error occurred:", error)
        }
      }
    }

    fetchData()
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
        <Route path='/movies/:id' element={<Movie />} />
        <Route
          path='*'
          element={
            <BlankSlate
              header='404 - Page Not Found'
              body='The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.'
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
