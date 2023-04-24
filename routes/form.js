var express = require('express');
const mongoose = require("mongoose")
var formRouter = express.Router();
// /* GET home page. */
formRouter.get('/', function(req, res, next) {
  res.render('form');
});

module.exports = formRouter;
