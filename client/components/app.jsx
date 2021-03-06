import React from 'react';
import Search from './search.jsx';
import Tabs from './tabs.jsx';
import AddMovie from './addMovie.jsx';
import axios from 'axios';

const key = '1aa4b71d59342b08b19dea8b16bcf4aa';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies : [
            ],
            tab: 'All Movies',
            notFound: null
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.tabHandler = this.tabHandler.bind(this);
        this.watchedHandler = this.watchedHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    componentDidMount() {
        axios.get('/movies').then((movies) => {
            let savedMovies = movies.data.map((movie) => {
                movie.display = true;
                movie.watched = false;
                return movie;
            })
            this.setState({
                movies: savedMovies
            })
        })
        .catch((err) => console.log(err))
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
        title = encodeURI(title);

        axios.get(url + title)
        .then((response) =>  {
            if (response.data.results.length === 0) {
                this.setState({notFound: 'No movie found by that name'})
            } else {
                let data = response.data.results[0];
                let movie = {
                    id: data.id,
                    title: data.title,
                    overview: data.overview,
                    vote_average: data.vote_average,
                    release_date: data.release_date,
                    poster_path: 'http://image.tmdb.org/t/p/w185/' + data.poster_path,
                    display: true,
                    watched: false
                }
    
                this.setState((state) => {
                    return {
                       movies: state.movies.concat([movie]),
                       notFound: null
                   }
               })
               return movie;  
            } 
        })
        .then((movie) => axios.post('/movie', movie).then((response) => console.log(response)))
        .catch((err) => console.log(err))
    }

    tabHandler(e) {
        let newMovies = this.state.movies.map((movie) => {
            movie.display = true;
            return movie;
        })
        this.setState({
            movies: newMovies,
            tab: e.target.name
        })
    }

    watchedHandler(movieData) {
        let newMovies = this.state.movies.map((movie) => {
            if (movie.title === movieData.title) {
                movie.watched = !movie.watched;
            }
            return movie;
        })

        this.setState({
            movies: newMovies
        })
    } 

    deleteHandler(currMovie) {
        let filteredMovies = this.state.movies
        .filter((movie) => movie.title !== currMovie.title);

        this.setState({
            movies: filteredMovies
        })

        axios({
            method: 'delete',
            url: '/movie',
            data: {
                title: currMovie.title
            }
        }).then((response) => console.log(response))
    }

    render() {
        return (
            <div>
                
                <AddMovie inputHandler={this.inputHandler}/>{this.state.notFound ? this.state.notFound : ""} 
                <Search searchHandler={this.searchHandler}/>
                <button className={this.state.tab === "All Movies" ? "tabs selected" : "tabs"} name="All Movies" onClick={this.tabHandler}>All Movies</button>
                <button className={this.state.tab === "Watched" ? "tabs selected" : "tabs"} name="Watched" onClick={this.tabHandler}>Watched</button>
                <button className={this.state.tab === "Not Watched" ? "tabs selected" : "tabs"} name="Not Watched" onClick={this.tabHandler}>Not Watched</button>
                <Tabs movies={this.state.movies} tab={this.state.tab} 
                watchedHandler={this.watchedHandler} deleteHandler={this.deleteHandler}/>
            </div>
        )
    }
}

export default App;