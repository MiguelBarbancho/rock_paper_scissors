'use strict'

var express = require('express');
var GameController = require('../controllers/game');
var api = express.Router();

//Routes
api.get('/', GameController.getOption);


module.exports = api;

