import React from 'react';

const MovieInfo = ({movieData, watchedHandler}) => (
    <div>
        <button className={movieData.watched ? "selected" : ""} 
                onClick={() => watchedHandler(movieData)}>Watched
        </button>
    </div>
)

export default MovieInfo;