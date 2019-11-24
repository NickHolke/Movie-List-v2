import React from 'react';

const MovieInfo = ({movieData, watchedHandler}) => (
    <div id="movie-info">
        <img id="poster" src={movieData.poster_path}></img>
        <div id="overview"><b>Overview:</b> {movieData.overview}</div>
        <div><b>Vote Average:</b> {movieData.vote_average}</div> 
        <div><b>Release Date: </b>{movieData.release_date}</div>
        <button id="watched-button"className={movieData.watched ? "selected" : ""} 
                onClick={() => watchedHandler(movieData)}>Watched
        </button>
    </div>
)

export default MovieInfo;