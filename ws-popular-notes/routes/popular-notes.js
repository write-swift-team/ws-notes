const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = new require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);

/* GET users listing. */
var schema = {
  "type": "array",
  "minItems": 3,
  "maxItems": 3,
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
      day: {
        type: 'integer',
        'minimum': 1,
        "maximum": 28
      },
      month: {
        type: 'string',
        chance:'month'
      },
      rating: {
        type: 'integer',
        'minimum': 81,
        "maximum": 100
      },
      heading: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        }
      },
      category: {
        type: 'string',
        chance: 'word'
      },
      image: {
        type: 'integer',
        'minimum': 1,
        'maximum': 99,
      },
      parapraph1: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph2: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph3: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph4: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph5: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph6: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      parapraph7: {
        type: 'string',
        chance:{
          'sentence': {
            "words": 2
          }
        },
      },
      },
      required: ['firstName','lastName','day','month','rating','heading','category','image','parapraph1','parapraph2','parapraph3','parapraph4','parapraph5','parapraph6','parapraph7']
  }
};

/* GET users listing. */
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
      res.send(sample);
    });
  });

module.exports = router;
