var express = require('express');
var router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get('/', function (req, res, next) {
    console.log("This responds to aboutme page (Vihan)");
    res.render('aboutme', { title: 'CodingBuddy' });
});

router.get('/feedback', function (req, res, next) {
    console.log("This responds to feedback logic");
    //res.render('aboutme', { title: 'CodingBuddy' });
    res.send('feedback received')
});

router.post('/feedback', function (req, res, next) {
    console.log("This responds to feedback logic");
    console.log(req.body.comment);
    //res.render('aboutme', { title: 'CodingBuddy' });
    res.send('feedback received from');
});

module.exports = router;