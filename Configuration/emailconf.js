const email = require('nodemailer');

let mailer = {};

    mailer.transporter = email.createTransport({
        service: 'Gmail',
        auth: {
            user: 'luisjuradoquesada@gmail.com',
            pass: 'piliputa'
        },
    },
    {
        from:'luisjuradoquesada@gmail.com',
        headers: {

        }
    })


module.exports = mailer;