const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));