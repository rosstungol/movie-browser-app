const apiKey = "f112456204d06b0cd5c500363b2e0cd0"

export const getMovieResultsUrl = (query) => {
  return (
    "https://api.themoviedb.org/3/search/movie?" +
    "api_key=" +
    apiKey +
    "&languange=en-US" +
    "&query=" +
    query +
    "&page=1" +
    "&include_adult=true"
  )
}

export const getMovieUrl = (id) => {
  return (
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    apiKey +
    "&languange=en-US"
  )
}
