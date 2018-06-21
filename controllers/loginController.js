const Controller = require('./controller');
const UserModel = require('../models/users');
const Logger = require('../Configuration/winston');
const Email = require('../Configuration/emailconf');
//const HbsEmail = require('../node_modules/nodemailer-express-handlebars/index');
const HbsEmail = require('nodemailer-express-handlebars');
const Path = require('path');
class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        Logger.info('iniciado login');
    }

    login() {
        let username = this.req.body.uname;
        let password = this.req.body.psw;
        let userModel = new UserModel();
        userModel.findUser(username, (info) => {
            console.log("datos recibidos >" + JSON.stringify(info));
            if (info.length === 0) {
                Logger.debug("el usuario no existe");
                this.req.flash('info', 'El usuario no existe');

                this.index();
            } else {
                if (password == info[0].password) {
                    this.res.render('login', {
                        title: 'Login',
                        layout: 'login',
                        nombre: info[0].username
                    })
                    this.index();
                } else {
                    this.req.flash('info', 'El password es incorrecto')
                    this.index();
                }
            }
        });
    }

    index() {
        let info = this.req.flash('info');
        if (info == "") {
            console.log("No Existe Info");
            this.res.render('login', {
                title: 'Login',
                layout: 'layout'
            });
        } else {
            this.res.render('login', {
                title: 'Login',
                layout: 'layout',
                info: info
            });
            info = "";
        }
    }


    recoverPass() {
        let email = this.req.body.email;
        let userModel = new UserModel();
        userModel.findMail(email, (info) => {

            if (info.length !== 0) {

            }
            Email.transporter.use('compile', HbsEmail({
                viewEngine: 'hbs',
                extName: '.hbs',
                viewPath: Path.join(__dirname, '../views/emails')
            }))
            let message = {
                to: info[0].email,
                subject: 'Recuperacion login',
                template: 'email',
                context: {
                    text: 'Usuario: ' + info[0].username + ' Contraseña: ' + info[0].password
                },

            };
            Email.transporter.sendMail(message, (error) => {
                if (error) {

                    res.status(500).send(error, message);
                    return
                }
                Email.transporter.close();

            });
        })
        res.redirect('/login');
    }
}

module.exports = loginController;