import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMovie } from '../../actions/moviesActions';
// import { toggleMenu } from '../../actions/dashboardUIActions';

class MovieForm extends Component {
    state = { 
        title: 'af',
        genre: '',
        numberInStock: '3er',
        dailyRentalRate: 'd'
     }

    // componentWillMount() {
    //     this.props.toggleMenu();
    // }

    handleChangle = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createMovies = e => {
        e.preventDefault();
        const genre = {
            _id: '5b21ca3eeb7f6fbccd471814',
            name: this.state.genre
        }
        const movie = {
            title: this.state.title,
            genre: genre,
            numberInStock: this.state.numberInStock,
            dailyRentalRate: this.state.dailyRentalRate,
            _id: Date.now(),
            liked: false,
            publishDate: Date.now(),
        }

        this.props.createMovie(movie);
        
    }

    // handleNewMovie = () => {
    //     const toggle = !!this.props.toggleMenu
    //     console.log(toggle)
    //     this.props.toggleMenu(toggle)
    // }

    render() { 
        const { title, genre, numberInStock, dailyRentalRate } = this.state;
        const { handleNewMovie } = this.props;
        return ( 
            <React.Fragment>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm">
                    <button className="btn btn-dark rounded-0"
                    onClick={handleNewMovie}
                    >Back</button>
                </div>
                <div className="bg-dark mx-4 mt-4 p-4 border shadow-sm">
                    <form onSubmit={this.createMovies}>
                        <div className="form-group">
                            <label className="text-light" htmlFor="title">Title</label>
                            <input type="text" name="title" onChange={this.handleChangle} value={title} className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="genre">Select Genre</label>
                            <select className="form-control" value={genre} name='genre' onChange={this.handleChangle} id="genre">
                                <option value="action">Action</option>
                                <option value="thriller">Thriller</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="stock">Stock</label>
                            <input type="text" name="numberInStock" onChange={this.handleChangle} value={numberInStock} className="form-control" id="stock"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="rate">Rating</label>
                            <input type="text" name="dailyRentalRate" onChange={this.handleChangle} value={dailyRentalRate} className="form-control" id="rate"/>
                        </div>
                        <button type="submit" className="btn btn-light mt-3">Submit</button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}

// const mapStateToProps = state => ({
//     toggleMenu: state.dashboardUI.toggleForm
// })
export default connect( null , {createMovie})(MovieForm);