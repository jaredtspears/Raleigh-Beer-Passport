// TODO this will need refactoring initally referenced project3 for reference 
//!delete the above comments when fixed

const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');
const app = express();
const PORT = process.env.PORT || 3001;

//define middleware here:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));


//add routes, both API and view:
app.use(routes);
app.get('*', function(req, res){
  console.log('catchall');
  res.sendFile('client/build/index.html', {root:__dirname});
})

//connect to the MongoDB:
mongoose.connect(process.env.MONGODB_URL|| 'mongodb://localhost/beerpassport');

//start API server: 
app.listen(PORT, function(){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})