import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header/header';
import LeftSideBar from './components/sidebar/leftsidebar';
import Movies from './components/content/movies';
import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import store from './store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = { 
    movies: getMovies(),
    genres: getGenres(),
    sidebarOpen: false,
   }

  sidebarToggle = (e) => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() { 
    const { sidebarOpen, movies, genres } = this.state;
    return (  
    <BrowserRouter>
        <Provider store={store}>
        <div className="App">
          <Header 
            sidebarToggle={this.sidebarToggle} 
            sidebarOpen={sidebarOpen}
          />
          <div className="dashboard-content d-flex position-relative">
            <LeftSideBar 
            sidebarOpen={sidebarOpen}
            />
            <Movies
              movies={movies}
              genres={genres}
              sidebarOpen={sidebarOpen}
              handleDelete={this.handleDelete}
              createNewMovie={this.createNewMovie}
            />
          </div>
        </div>
        </Provider>
    </BrowserRouter>
    );
  }
}

export default App;