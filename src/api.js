import axios from "axios";


const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL
// get film list dengan axios
export const getFilmList = async() => {
    const film = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`
    )
    return film.data.results
}

export const searchFilm = async(q) => {
    const search = await axios.get(`${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data 
}   