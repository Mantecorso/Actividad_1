var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quienessomos', function(req, res, next) {
  res.render('quienessomos', { title: 'Quienes somos' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'registro' });
});

router.get('/login',(req, res, next)=>{
  let loginController = new LoginController(req, res, next);
  loginController.index();
 });
 
 router.post('/login', (req, res, next)=>{
   let loginController = new LoginController(req, res, next);
  loginController.login();
   
 })
module.exports = router;
