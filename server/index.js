const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const cors = require('cors');

//setup express app
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/issuetracker');
mongoose.Promise = global.Promise;

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(__dirname + '/client'));

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize routes
app.use('/api',routes);

//error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message});
});

//Listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
