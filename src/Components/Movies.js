import React, { Component } from 'react'
import {movies} from './getMovies';
import axios from 'axios';

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [1],
            currPage: 1,
            movies: []
        };
    }

    async componentDidMount() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=516f544ecf3dde96056b1a878cbc6e34&language=en-US&page=${this.state.currPage}`);
      let data = res.data;
      this.setState({
        movies: [...data.results]
      });
    }

    changeMovies = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=516f544ecf3dde96056b1a878cbc6e34&language=en-US&page=${this.state.currPage}`);
      let data = res.data;
      this.setState({
        movies: [...data.results]
      });
    }

    handleLeft = () => {
      if (this.state.currPage > 1) {
        this.setState({
          currPage: this.state.currPage - 1
        }, this.changeMovies);
      }
    }
    
    goToPage = (val) => {
      if (val != this.state.currPage) {
        this.setState({
          currPage: val
        }, this.changeMovies);
      }
    }

    handleRight = () => {
      let tempArr = [];
      for(let i = 1 ; i <= this.state.parr.length + 1 ; i++) {
        tempArr.push(i);
      }

      this.setState({
        parr: [...tempArr],
        currPage: this.state.currPage + 1,
      }, this.changeMovies);
    }
    
  render() {
    return (
      <>
        <h3 className='text-center'>Trending</h3>
        <div className='movies-section'>
            {
                this.state.movies.map((movieObj) => (
                    <div className="card movie-card" onMouseEnter={() => this.setState({hover: movieObj.id})} onMouseLeave={() => this.setState({hover: ''})}>
                    <img src = {`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top" alt={movieObj.title}/>
                    <div className="movie-text card-body">
                      <h5 className="card-title">{movieObj.title}</h5>
                      <p className="card-text">{movieObj.overview}</p>
                      {
                          this.state.hover === movieObj.id &&
                          <a className="btn btn-primary movie-button">Add to Favourites</a>
                      }
                    </div>
              </div>
                ))
            }
        </div>

        <nav aria-label="Page navigation example" className='movie-pagination'>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
                {
                    this.state.parr.map((val) => (
                        <li class="page-item"><a onClick={() => this.goToPage(val)} class="page-link">{val}</a></li>
                    ))
                }
                <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
            </ul>
        </nav>
      </>
    )
  }
}
