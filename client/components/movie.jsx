import React from 'react';
import MovieInfo from './movieInfo.jsx';

class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div id='movie'>
                <span id="title" onClick={this.clickHandler}>{this.props.movieData.title}</span>   
                {this.state.clicked ? 
                <MovieInfo movieData={this.props.movieData} watchedHandler={this.props.watchedHandler}/>
                : null} 
            </div>
        )
    }
} 
    


export default Movie;