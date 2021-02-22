//dependencies
var express = require('express');
var bodyParser = require('body-parser');

//imported from the routes that you exported from routes.js
var routes = require('./controller/routes.js');

//express
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

//middleware that converts json and text sent from the client side
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//this is how you set the port number in order to have your app work with heroku
//this is saying "if there is an environment variable called PORT, then use that"
//if there is not an environment variable called PORT, then use 3000 as the port number
var PORT = process.env.PORT || 3000;

//runs your server and has it listen on a port
app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});
