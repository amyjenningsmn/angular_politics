var express = require('express');
var path = require('path');
var app = express();

var democrats = ["Hillary Clinton", "Bernie Sanders"];
var republicans = ["Ted Cruz", "Donald Trump"];
// two payloads

app.use(express.static('server/public'));

app.get('/', function(request, response){
  var createdPath = __dirname + '/public/index.html';
  console.log(createdPath);
  response.send(createdPath);
})

app.get('/democrats', function(request, response) {
  response.send(democrats);
})
app.get('/republicans', function(request, response){
  response.send(republicans);
})

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
