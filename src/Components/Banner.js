import React, { Component } from 'react'
import {movies} from './getMovies';

export default class Banner extends Component {
  render() {
    let movie = movies.results[0]; 

    return (
        <div className="card">
            <img src = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt={movie.title}/>
            <div className="banner-text">
              <h1 className="card-title">{movie.title}</h1>
              <p className="card-text">{movie.overview}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
      </div>
    )
  }
}
