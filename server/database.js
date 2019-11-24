// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/movielist').then(()=> console.log('db connected'))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movielist', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log('mongoose connected'));

// , {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('Mongo db connected'))