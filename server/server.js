var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', index);

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
