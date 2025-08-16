var express = require('express');
var router = express.Router();

// Root route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loc8r' });
});

// Location info
router.get('/location', function(req, res, next) { 
  res.render('index', { title: 'Location Info' }); 
});

// Review page
router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review' }); 
});

// About page
router.get('/about', function(req, res, next) { 
  res.render('index', { title: 'About' });
});

module.exports = router;
