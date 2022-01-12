require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movies/:inputValue', (req, res) => {
  let query = req.params.inputValue; 
    axios({
      url: `http://omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`,
      method: 'get'
    })
    .then((response) => {
      res.send(response.data);
    });
  });

app.get('/movie/:id', (req, res) => {
  let id = req.params.id;
     axios({
        url: `http://omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`,
        method: 'get'
    })
    .then((response) => {
        res.send(response.data);
    });
});

module.exports = app;
