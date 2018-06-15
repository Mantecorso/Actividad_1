const Controller = require('./controller');
const UserModel = require('../models/users');
class registroController extends Controller
{
  constructor(req, res, next)
  {
      super(req,res,next);
  }  
   registro()
  {
      let username = this.req.body.uname;
      let password = this.req.body.psw;
      let correo = this.req.body.email;

      let userModel = new UserModel();       
      userModel.registroUser(username, password, correo, (info)=>{
         console.log("datos recibidos "+ info);
       
       });
       this.res.redirect('/login');
   }  
 
   index()
  {
       this.res.render('registro', {title:'Registro', layout:'layout'});    
   }
}
module.exports = registroController;


