import { apiKey } from "../data/constants"

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
