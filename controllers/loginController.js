const Controller = require('./controller');
const UserModel = require('../models/users');
const Logger = require('../Configuration/winston');
class loginController extends Controller
{
  constructor(req, res, next)
  {
      super(req,res,next);
      Logger.info('iniciado login');
  }

   login()
  {
      let username = this.req.body.uname;
      let password = this.req.body.psw;
      let userModel = new UserModel();       
      userModel.findUser(username,(info)=>{
         console.log("datos recibidos >"+ JSON.stringify(info));
       if (info.length === 0){
           logger.debug("el usuario no existe");
          this.req.flash('info','El usuario no existe');
          
           this.index();    
           }else{
           if(password==info[0].password){
               this.index();
           }else{
               this.req.flash('info','El password es incorrecto')
               this.index();    
           }
           }
       });
   }  

   index()
  {
     let info = this.req.flash('info');
      if(info == "")
      {
       console.log("No Existe Info");
       this.res.render('login', {title:'Login', layout:'layout'});
       }else{
           this.res.render('login', {title:'Login', layout:'layout',info:info});
           info="";
       }
   }
}
module.exports = loginController;
