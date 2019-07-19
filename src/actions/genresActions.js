import { FETCH_GENRES } from './types';
import { getGenres } from '../services/fakeGenreService';

export const fetchGenres = () => dispatch => (
    dispatch({
        type: FETCH_GENRES,
        payload: getGenres()
    })
)
