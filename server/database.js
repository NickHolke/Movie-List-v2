const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movielist', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Mongodb connected'));

const movieSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    title: String,
    overview: String,
    vote_average: Number,
    release_date: String,
    poster_path: String
})

const Movie = mongoose.model('Movie', movieSchema);

let save = (movieData) => {
    let movie = new Movie(movieData);
    return movie.save(movie)
}

let getAll = () => {
    return Movie.find().exec();
}

let remove = (title, callback) => {
    Movie.deleteOne({title: title}, (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null, err)
        }
    })
}

module.exports = {
    save: save,
    getAll: getAll,
    remove: remove
}
