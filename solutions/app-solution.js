 * This is our home route.  This gets called when we visit our
 * base address http://MYSERVERNAME.mybluemix.net/
**/
var userCount = 0;
/* added var definition for your new variable, userbytwo here */
var userbytwo = 0;

app.get('/', function(req, res){
  userCount = userCount + 1;
  /* added statement to increment userbytwo by two here */
  userbytwo = userbytwo + 2;
  res.render('index', {userCount: userCount, userbytwo: userbytwo}); /* updated this line to also pass userbytwo */
});

/**
 * This is where the server is created and run.  Everything previous to this
 * was configuration for this server.
**/
var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});
