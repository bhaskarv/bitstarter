var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  //Read file index.html
  contents = fs.readFileSync('index.html');

  //Send file content to the browser
  response.send(contents.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
