//...This is the routes/index.js file...

const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello World! This is the data on the home page!');});

router.use('/contacts', require('./contacts'));

module.exports = router;