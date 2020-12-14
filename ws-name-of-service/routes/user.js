const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = new require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "minItems": 5,
  "maxItems": 10,
  "items": {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        faker: 'name.firstName'
      },
      lastName: {
        type: 'string',
        chance: 'last'
      }
    },
    required: ['firstName','lastName']
  }
};

/* GET users listing. */
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
    res.render('name-of-service', { sampleReview: sample});
  });
});

module.exports = router;
