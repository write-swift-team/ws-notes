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
  faker: 'name.lastName'
  },
  city: {
    type: 'string',
    faker: 'adress.city'
    },
  email: {
      type: 'string',
      faker: 'internet.email'
      },
      number: {
        type: 'integer',
        faker: 'random.number',
        'minimum': 1,
        'maximum': 31,
        },
        month: {
          type: 'string',
          faker: 'date.month'
          },
  },
  required: ['firstName','lastName', 'city', 'email', 'number', 'month']
  }
 };
 

/* GET users listing. */
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
  res.render('ws-handlebars', { tutorial: sample});
  });
 });
 module.exports = router;
