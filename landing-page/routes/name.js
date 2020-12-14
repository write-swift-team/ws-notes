const express = require('express');
const router = express.Router();

const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = new require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "maxItems": 1,
  "items": {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        faker: 'name.firstName'
      }
    },
    required: ['name']
  }
};
/* GET users listing. */
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
    res.render('fakeName', { Name: sample});
  });
});


module.exports = router;