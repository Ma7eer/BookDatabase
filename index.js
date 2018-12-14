const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const morgan = require('morgan');
require('dotenv').config(); // configure .env file

// connect to local sql db
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

// initialize express
const app = express();

// initialize morgan to get logs
app.use(morgan('dev'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET route
app.get('/books', (req, res) => {
  connection.connect();

  connection.query('SELECT * FROM booklist', function (error, results) {
    if (error) throw error;
    res.json({message:results[0]})
  });

  connection.end();
});

// server
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});