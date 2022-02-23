var express = require('express');
const MyClass = require('../Utils/MyClass');


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
    var feedbackreceived = "Feedback received from " + req.body.name;
    const myclass = new MyClass(req.body.name, req.body.email, req.body.comment);
    // var feedback = new Feedback(req.body.name, req.body.email, req.body.comment);
    res.send("Thank you for your feedback " + myclass.getUserName());
});


module.exports = router;