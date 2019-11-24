import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='movie'><span id="title">{this.props.movieData.title}</span></div>
        )
    }
} 
    


export default Movie;