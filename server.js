var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3500);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});



app.get('/', function(req, res) {
  res.send('hello world');
});
