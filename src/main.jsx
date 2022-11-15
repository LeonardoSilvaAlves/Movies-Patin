import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'
import Home from './pages/home'
import Movie from './pages/movie'
import Search from './pages/search'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='movie/:id' element={<Movie />}/>
      <Route path='search' element={<Search />}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
