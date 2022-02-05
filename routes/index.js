var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("This responds to home page");
  res.render('index', { title: 'CodingBuddy' });
});
/* Get About Me page */
router.get('/aboutme', function (req, res, next) {
  console.log("This responds to aboutme page");
  res.render('aboutme', { title: 'CodingBuddy' });
});

router.get('/test', function (req, res, next) {
  console.log("This responds to test page");
  res.send("Test");
});
module.exports = router;
