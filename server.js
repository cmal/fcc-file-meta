var express = require('express');
var path = require("path");
var app = express();
var multer  = require('multer');
var upload = multer();
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.get('/', function(req, res) {
  res.render('index', {});
});
app.post('/get-file-size', upload.single('form-file-name'), function(req, res) {
  res.send(JSON.stringify({ size: req.file.size }));
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});