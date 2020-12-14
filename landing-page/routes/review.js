const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', (req, res) => {
    // res.render('fakeReview', { "review": faker.lorem.sentences()});
    res.send({"review": faker.lorem.sentence()});
});

module.exports = router;