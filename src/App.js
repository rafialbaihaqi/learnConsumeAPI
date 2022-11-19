import './App.css';
import { getFilmList, searchFilm } from './api';
import { useEffect, useState } from "react";

const App = () => {
  const [popularFilm, setPopularFilm] = useState([])

  // lifecycle to render first when open browser
  useEffect(() => {
    getFilmList().then((result) => {
      setPopularFilm(result)
    })
  }, [])

  const PopularFilmList = () =>{
    return popularFilm.map((film, i) => {
      return(
        <div className="film-wrapper" key={i}>
            <div className="film-title">{film.title}</div>
            <img 
              className="film-img" 
              src={`${process.env.REACT_APP_BASEIMGURL}/${film.poster_path}`}
            />
            <div className="film-date">release : {film.release_date}</div>
            <div className="film-rate">{film.vote_average}</div>
          </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3){
      const query = await searchFilm(q)
      setPopularFilm(query.results)
      console.log({ query: query})
    }
  }
console.log({ popularFilm: popularFilm })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Albarafi Movie</h1>
        <input 
          placeholder="cari film favorit..." 
          class="film-search" 
          onChange ={({ target }) => search(target.value)}
        />
        <div className="film-container">
          <PopularFilmList />
        </div>
      </header>
    </div>
  );
}

export default App;
