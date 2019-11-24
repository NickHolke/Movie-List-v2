import React from 'react';
import Movie from './movie.jsx';

const Tabs = ({movies, tab, watchedHandler}) => {
    if (tab === 'Watched') {
        return (
        <div id="movies-container">
            {movies.map((movie, idx) => {
                if (movie.watched && movie.display) {
                    return <Movie movieData={movie} watchedHandler={watchedHandler} key={idx}/>
                }
             })}
        </div>
        )
    } else if (tab === 'Not Watched') {
        return (
        <div id="movies-container">
            {movies.map((movie, idx) => {
                if (!movie.watched && movie.display) {
                    return <Movie movieData={movie} watchedHandler={watchedHandler} key={idx}/>
                }
            })}
        </div>
        )
    } else {
        return (
        <div id="movies-container">
            {movies.map((movie, idx) => {
                if (movie.display) {
                    return <Movie movieData={movie} watchedHandler={watchedHandler} key={idx}/>
                }
            })}
        </div>
        )
    }
}

export default Tabs;

