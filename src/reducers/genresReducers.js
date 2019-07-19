import { FETCH_GENRES } from '../actions/types'

const initialState = {
    genres: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_GENRES:
            return ({
                ...state,
                genres: action.payload
            })
        default:
            return state;
    }
}