import { TOGGLE_FORM } from '../actions/types'

const initialState = {
    toggleForm: false
}

export default function(state = initialState, action){
    switch(action.type){
        case TOGGLE_FORM:
            return ({
                ...state,
                toggleForm: action.payload
            })
        default:
            return state;
    }
}