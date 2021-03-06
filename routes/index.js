var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController');
const RegistroController = require('../controllers/registroController');
//const Email = require('../Configuration/emailconf');
//const Path = require('path');
//const HbsEmail = require('nodemailer-express-handlebars');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/quienessomos', function (req, res, next) {
  res.render('quienessomos', {
    title: 'Quienes somos'
  });
});

//router.get('/registro', function(req, res, next) {
//  res.render('registro', { title: 'registro' });
//});

router.get('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.index();
});

router.post('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.registro();
});

router.get('/login', (req, res, next) => {
  let loginController = new LoginController(req, res, next);
  loginController.index();
});

router.post('/login', (req, res, next) => {
  let loginController = new LoginController(req, res, next);
  loginController.login();

});

router.post('/email', (req, res, next)=>{
  let loginController = new LoginController(req, res, next);
  loginController.recoverPass();
});

//router.get('/email', (req, res, next) => {
//  Email.transporter.use('compile', HbsEmail ({
//      viewEngine: 'hbs',
//      extName: '.hbs',
//      viewPath: Path.join(__dirname, "../views/emails")
//  }))
//  let message = {
//    to: 'luisjuradoquesada@gmail.com',
//    subject: 'Email de prueba',
//    template: 'email',
//    context: {text: 'Enviamos una prueba por handlebars'},
//    attachments:[
//      {
//        filename:'beijing.JPG',
//        path:__dirname + '/../public/images/beijing.JPG',
//        cid:'imagen'
//      }
//    ]
//  };
//  Email.transporter.sendMail(message, (error, info) => {
//    if (error) {
//      res.status(500).send(error, message);
//      return
//    }
//    Email.transporter.close();
//    res.status(200).send('Respuesta "%s"' + info.response);
//  });

//})

module.exports = router;