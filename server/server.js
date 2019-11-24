const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const db = require('./database.js')

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.post('/movie', (req, res) => {
    db.save(req.body).then((response) => {
        res.status(200);
        res.send(response);
    }).catch((err) => {
        res.status(400);
        res.send(err);
    })
})

app.get('/movies', (req, res) => {
    db.getAll().then((results) => {
        res.status(200);
        res.send(results);
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
})

app.delete('/movie', (req, res) => {
    let title = req.body.title;
    db.remove(title, (err, results) => {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.status(200);
            res.send('movie deleted');
        }
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));