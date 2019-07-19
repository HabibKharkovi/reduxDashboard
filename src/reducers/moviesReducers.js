import { FETCH_MOVIES, NEW_MOVIE, DELETE_MOVIE, LIKE, FILTER_MOVIES } from '../actions/types'

const initialState = {
    movies: [],
    filterMovies: [],
    movie: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_MOVIES:
            return ({
                ...state,
                movies: action.payload,
                filterMovies: action.payload
            })
        case NEW_MOVIE:
            return ({
                ...state,
                movie: action.payload
            })
        case DELETE_MOVIE:
            return({
                ...state,
                movies: action.payload
            })
        case LIKE:
            return({
                ...state,
                filterMovies: action.payload
            })
        case FILTER_MOVIES:
            return({
                ...state,
                movies: action.payload
            })
        default:
            return state;
    }
}