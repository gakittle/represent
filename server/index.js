var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');
const { getReps } = require('./routes.js');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reps/:address', function(req, res) {
  getReps(req.params.address, (err, data) => {
    if (err) res.sendStatus(500);
    else res.send(data);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
