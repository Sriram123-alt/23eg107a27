var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Loc8r' }); 
  }); 
  router.get('/location', function(req, res, next) { 
    res.render('index', { title: 'location info' }); 
  }); 
  router.get('/location/review', function(req, res, next) {
     res.render('index', { title: 'Review' }); 
    }); router.get('/about', function(req, res, next) { 
      res.render('index', { title: 'about' });
     });

module.exports = router;
