var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  });
});
module.exports = router;

router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})

function removePunctuations(phrase){
  let newPhrase = phrase.toLowerCase();
  newPhrase = newPhrase.replace(".", "");
  newPhrase = newPhrase.replace(",", "");
  newPhrase = newPhrase.replace(";", "");
  newPhrase = newPhrase.replace(":", "");
  newPhrase = newPhrase.replace("!", "");
  newPhrase = newPhrase.replace("?", "");
  newPhrase = newPhrase.replace("'", "");
  newPhrase = newPhrase.replace('"', "");
  newPhrase = newPhrase.replace(' ', "");
  return newPhrase;
}

function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (removePunctuations(phrase) === removePunctuations(temp)){
    return true
  }
  else {
    return false
  }
}

function reversePhrase(phrase){
  let phrase2 = phrase.split("");
  phrase2 = phrase2.reverse();
  phrase2 = phrase2.join("")
  return phrase2;
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is  a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}