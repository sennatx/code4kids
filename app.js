/*jslint node:true*/
/*eslint no-unused-params:0*/
/* These lines are hints to the code editor */

/**
 * Load the appropriate modules for our web application
*/
var http = require('http');
var path = require('path');
var express = require('express');   // The ExpressJS framework
var morgan  = require('morgan');    // For clearing logging messages

/**
 * Setup the Express engine
**/
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// Stuff to do for all routes
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * This is our home route.  This gets called when we visit our
 * base address http://MYSERVERNAME.mybluemix.net/
**/
var userCount = 0;
/* add var definition for your new variable, userbytwo here */

app.get('/', function(req, res){
  userCount = userCount + 1;
  /* add statement to increment userbytwo by two here */
  res.render('index', {userCount: userCount}); /* update this line to also pass userbytwo */
});

/**
 * This is where the server is created and run.  Everything previous to this
 * was configuration for this server.
**/
var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});



