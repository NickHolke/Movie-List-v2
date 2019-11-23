import React from 'react';
import Movie from './movie.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies : [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
            ]
        }
    }

    render() {
        return (
            <div id="movies-container">
                {this.state.movies.map((movie, idx) => <Movie movieData={movie} key={idx}/>)}
            </div>
        )
    }
}

export default App;