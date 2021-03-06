var express = require('express');
const Feedback = require('../Utils/Feedback');
//const FeedbackTs = require('../Utils/FeedbackTs');


var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get('/', function (req, res, next) {
    console.log("This responds to aboutme page (Vihan)");
    res.render('aboutme', { title: 'CodingBuddy' });
});

router.get('/feedback', function (req, res, next) {
    console.log("This responds to feedback logic");
    res.send('feedback received')
});

router.post('/feedback', function (req, res, next) {
    console.log("This responds to feedback logic");
    //console.log(req.body.comment);
    var feedbackreceived = "Feedback received from " + req.body.name;
    const feedback = new Feedback(req.body.name, req.body.email, req.body.comment);
    feedback.writeFeedback();
    //const feedbackts = new FeedbackTs(req.body.name, req.body.email, req.body.comment);

    res.send("Thank you for your feedback " + feedback.getUserName());
});


module.exports = router;