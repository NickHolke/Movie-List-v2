import React from 'react';
import Search from './search.jsx';
import Tabs from './tabs.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies : [
            ],
            tab: 'All Movies'
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.tabHandler = this.tabHandler.bind(this);
    }

    searchHandler(term) {
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

    inputHandler(title) {
        let movie = {
            title: title,
            display: true,
            watched: false
        }
        this.setState((state) => {
             return {
                movies: state.movies.concat([movie])
            }
        })   
    }

    tabHandler(e) {
        console.log(e.target.innerHTML)
    }

    render() {
        return (
            <div>
                <AddMovie inputHandler={this.inputHandler}/>
                <Search searchHandler={this.searchHandler}/>
                <div className='tabs' onClick={this.tabHandler}>All Movies</div>
                <div className='tabs' onClick={this.tabHandler}>Watched</div>
                <div className='tabs' onClick={this.tabHandler}>Not Watched</div>
                <Tabs movies={this.state.movies} tab={this.state.tab}/>
            </div>
        )
    }
}

export default App;