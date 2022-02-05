var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("This responds to aboutme page (Vihan)");
    res.render('aboutme', { title: 'CodingBuddy' });
});

module.exports = router;