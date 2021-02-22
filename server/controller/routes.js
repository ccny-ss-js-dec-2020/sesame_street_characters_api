//importing dependencies
var express = require('express');
//you do not have to do npm i for this, as it is built into node
var path = require('path');

const sesame_street_characters = require('../data/characters.js');

//storing express.Router() in a variable
//which is built into express to store and export your routes
var router = express.Router();

router.get('/characters', function(req, res){
	res.json({success: true, data: sesame_street_characters});
});

//exporting routes to be imported in our server.js
module.exports = router;
