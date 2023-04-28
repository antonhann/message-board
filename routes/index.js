var express = require('express');
const message = require("./data/messages")
var router = express.Router();
const connect = require("./data/mongo")
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];
// /* GET home page. */
// let messages = connect()
// messages.then(() => {console.log(messages)})
router.get('/', async function(req, res, next) {
  let messages = await connect()
  res.render('index', {title: "Message Board", messages});
});

router.get('/form', function(req, res, next) {
  res.render('form', {title: "New Message"});
});

router.post("/form", function(req, res, next){
  let text = req.body.message
  let username = req.body.username
  message.create({
    text: text,
    user: username,
  })
  // messages.push({
  //   text: message,
  //   user: username,
  //   added: new Date(),
  // })
  res.redirect("/")
})

module.exports = router;
