import React, { Component } from 'react';
import Like from '../utilites/like';
import Pagination from '../utilites/pagination';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie, like, filterMovies } from '../../actions/moviesActions';
import { fetchGenres } from '../../actions/genresActions';
// import { toggleMenu } from '../../actions/dashboardUIActions';


class MoviesTable extends Component {

    componentWillMount() {
        this.props.fetchMovies(); 
        this.props.fetchGenres();
        this.props.filterMovies();
        // this.props.toggleMenu();
    }

    handleDelete = movie => {
        const movies = this.props.movies.filter(m => m._id != movie._id);
        this.props.deleteMovie(movies)
      }

    handleLike = movie => {
        const movies = [...this.props.movies];
        const index = movies.indexOf(movie);
        const updateMovie = movies[index];
        updateMovie.liked = !updateMovie.liked;
        this.props.like(movies);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.movie){
            this.props.movies.unshift(nextProps.movie);
        }
    }

    // handleNewMovie = () => {
    //     const toggle = !!this.props.toggleMenu
    //     console.log(toggle)
    //     this.props.toggleMenu(toggle)
    // }

    filterMovies = (genre) => {
        const movies = this.props.movies.filter(m => m.genre._id === genre._id);
        this.props.filterMovies(movies);
    }
    
  
    render() { 
        const { handleNewMovie } = this.props;
        return (
            <React.Fragment>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm d-flex">
                    <button className="btn btn-dark rounded-0"
                    onClick={handleNewMovie}
                    >New Movies</button>
                    <div className="input-group search-movie-wrap">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary text-light btn-dark rounded-0" type="button" id="button-addon1">Search</button>
                        </div>
                            <input type="text" className="form-control rounded-0" placeholder="Search Movies"/>
                    </div>
                </div>
                <div className="m-4 bg-light p-4 border shadow-sm">
                    <div className="p-4 bg-dark text-light w-100 mb-4">
                       {this.props.genres.map(genre => 
                         <button type="button" className="btn btn-light mr-2 rounded-0 btn-sm" key={genre._id} onClick={() => this.filterMovies(genre)}>
                            {genre.name}
                         </button> 
                       )}
                    </div> 
                    <div className="table-responsive-md">
                        <table className="table table-dark w-100 custom-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rating</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>Like</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.filterMovie.map(movie => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button className="btn btn-light rounded-0 btn-sm"
                                        onClick = {() => this.handleDelete(movie)}
                                        >Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-light rounded-0 btn-sm">Edit</button>
                                    </td>
                                    <td>
                                        <Like 
                                           movie={movie}
                                           handleLike={this.handleLike}
                                        />
                                    </td>
                                </tr>    
                                )}
                            </tbody>
                        </table>
                    </div>  
                    <Pagination/>
                </div>
            </React.Fragment>
         );
    }
}

const mapStatetoProps = state => ({
    movies: state.movies.movies,
    genres: state.genres.genres,
    movie: state.movies.movie,
    filterMovie: state.movies.filterMovies
    // toggleMenu: state.dashboardUI.toggleForm
})

export default connect(mapStatetoProps, { fetchMovies, deleteMovie, fetchGenres, like, filterMovies })(MoviesTable);