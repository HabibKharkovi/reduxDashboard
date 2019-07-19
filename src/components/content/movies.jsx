import React, { Component } from 'react';
// import { connect } from 'react-redux';
import MoviesTable from './moviesTable';
import MovieForm from './movieForm';
import Footer from '../footer/footer';
// import { toggleMenu } from '../../actions/dashboardUIActions';


class Movies extends Component {
    state = { 
        newMovie: false
     }

    handleNewMovie = () => {
        this.setState({ newMovie: !this.state.newMovie});
    }

    // componentWillMount() {
    //     this.props.toggleMenu();
    // }

    render() { 
        const { sidebarOpen } = this.props;
        const { newMovie } = this.state;
        return ( 
            <div className={`right-content position-relative ${sidebarOpen ? `show` : '' }`}>
                {newMovie ?
                <MovieForm
                    handleNewMovie={this.handleNewMovie}
                /> 
                :
                <MoviesTable 
                    handleNewMovie={this.handleNewMovie}
                />
                }
                <Footer/>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    toggleMenu: state.dashboardUI.toggleForm
})
 
// export default connect(mapStateToProps, {toggleMenu})(Movies);
export default Movies