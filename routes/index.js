var express = require('express');
const mongoose = require("mongoose")
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Message Board", messages});
});

router.get('/form', function(req, res, next) {
  res.render('form', {title: "New Message"});
});

router.post("/", function(req, res, next){
  let message = req.body.message
  let username = req.body.username
  messages.push({
    text: message,
    user: username,
    added: new Date(),
  })
  res.redirect("/")
})

module.exports = router;
