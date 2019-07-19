import { combineReducers } from 'redux';
import moviesReducers from './moviesReducers';
import genresReducers from './genresReducers';
import dashboardUIReducers from './dashboardUIReducers';

export default combineReducers({
    movies: moviesReducers,
    genres: genresReducers,
    dashboardUI: dashboardUIReducers
})