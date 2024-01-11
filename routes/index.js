//...This is the routes/index.js file...

const router = require('express').Router();

// Redirect from '/' to '/home'
router.get('/', (req, res) => {
    res.redirect('/home');
  });
  
  // Handle the '/home' route
  router.get('/home', (req, res) => {
    res.send('Hello World! This is the data on the home page!');
  });

router.use('/contacts', require('./contacts'));

module.exports = router;