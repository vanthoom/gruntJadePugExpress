var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.engine('jade', require('jade').__express);
app.engine('pug', require('pug').__express);

app.use(express.static(path.join(__dirname)));
app.use('/lib', express.static(__dirname + '/../lib'));
app.use('/src', express.static(__dirname + '/../src'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get(/\/(.*)/, function (req, res) {
  res.render(req.params[0]);
});

var server = http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000");
});


module.exports = app;