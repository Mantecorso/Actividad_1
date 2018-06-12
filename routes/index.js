var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quienessomos', function(req, res, next) {
  res.render('quienessomos', { title: 'Quienes somos' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro' });
});

module.exports = router;
