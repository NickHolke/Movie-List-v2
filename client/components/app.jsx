import React from 'react';
import Movie from './movie.jsx';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies : [
            ]
        }

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(term) {
        console.log(term)
        let newMovies = this.state.movies.map((movie) => {
            if (!movie.title.toLowerCase().includes(term.toLowerCase())) {
                movie.display = false;
            }
            return movie;
        })
        this.setState({
            movies: newMovies
        })
    }

    render() {
        return (
            <div>
                <AddMovie/>
                <Search searchHandler={this.searchHandler}/>
                <div id="movies-container">
                    {this.state.movies.map((movie, idx) => {
                        if (movie.display) {
                            return <Movie movieData={movie} key={idx}/>
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default App;