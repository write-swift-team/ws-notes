const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', (req, res) => {
    // res.render('fakeAvatar', { "image": faker.image.image()});
    res.send({"image": faker.image.image()});
});

module.exports = router;