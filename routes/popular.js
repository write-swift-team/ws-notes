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
heading: {
type: 'string',
chance:{'sentence':{"words":2
}
}
},
price: {
type: 'integer',
'minimum': 1,
'maximum': 65,
}
},
image:{
type:'string',
faker:'image.image'
},
required: ['price','heading','image']
}
};

/* GET users listing. */
router.get('/', (req, res) => {
jsf.resolve(schema).then(sample => {
res.send(sample);
});
});

module.exports = router;
