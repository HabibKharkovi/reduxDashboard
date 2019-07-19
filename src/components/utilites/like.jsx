import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Like(props) {

    const { movie, handleLike } = props
    return ( 
        <FontAwesomeIcon onClick={() => handleLike(movie)} className={`${movie.liked ? 'text-red': ''} like-icon`} icon={faHeart}/>
     );
}
 
export default Like;

