import { FETCH_MOVIES, NEW_MOVIE, DELETE_MOVIE, LIKE, FILTER_MOVIES } from './types';
import { getMovies } from '../services/fakeMovieService';

export const fetchMovies = () => dispatch => (
    dispatch({
        type: FETCH_MOVIES,
        payload: getMovies()
    })
)

export const filterMovies = (movies) => dispatch => (
    dispatch({
        type: FILTER_MOVIES,
        payload: movies
    })
)

export const createMovie = (movie) => dispatch => (
    dispatch({
        type: NEW_MOVIE,
        payload: movie
    })
)

export const deleteMovie = (movies) => dispatch => {
    dispatch({
        type: DELETE_MOVIE,
        payload: movies
    })
}

export const like = (movies) => dispatch => {
    dispatch({
        type: LIKE,
        payload: movies
    })
}