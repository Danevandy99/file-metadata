'use strict';

var flash = require('express-flash');
var express = require('express');
var multer  = require('multer')
var upload = multer()

var app = express();

app.get('/', function(req, res) {
  res.sendfile('./home.html');
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
