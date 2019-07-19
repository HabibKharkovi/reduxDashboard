import { TOGGLE_FORM } from './types';

export const toggleMenu = (toggle) => dispatch => (
    dispatch({
        type: TOGGLE_FORM,
        payload: toggle
    })
)