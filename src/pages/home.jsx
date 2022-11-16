import { useState, useEffect } from "react"
import movie from "./movie";
import MovieCard from "../components/movieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import 'moviesGrid.css';




const Home = () => {
  
  

  const [topMovies, setTopMovies] = useState([])
  const getTopRatedMovies = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() =>{

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    
    getTopRatedMovies(topRatedUrl)

  }, [])


    return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
    
  )
}

export default Home
