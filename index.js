const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const pg = require('pg');

// initialize express
const app = express();

// setup db connection string
const connect = 'postgresql://username:password@database.server.com:3211/mydb';

// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views folder to be our template source
app.set('views', __dirname + '/views');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.render('index');
})

// server
app.listen(3000, () => {
    console.log('Server started on port 3000...');
})