var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3500);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
