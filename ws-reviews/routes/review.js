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
      review: {
        type: 'string',
        chance: {'sentence': {
          'words': 70
        },
        }
      },
      stars: {
        type: 'integer',
        'minimum': 1,
        'maximum': 3,
      },
      minute: {
        type: 'string',
        chance: 'minute'
      },
      image: {
        type: 'integer',
        'minimum': 1,
        'maximum': 99,
      }
    },
    required: ['firstName','lastName','review','stars','minute','image']
  }
};

/* GET users listing. */
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
    res.render('review', { sampleReview: sample});
  });
});

module.exports = router;
