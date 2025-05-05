const express = require('express'); 
const {valiteToken} = require('../util/jwt');
const {
    register,
    login,
    logout,
    verify,
    forgotPassword,
    resetPassword,
  } = require("../controller/auth.controller");
  const router = express.Router();

  const verifingUser = async function(req,res,next){
        try{
        const token=req.boby();
        valiteToken(token);
        res.status(200).json({
          status:true,
          message:'login done by token'
        })
        }
        catch(err){
            
        }
        
  }
  
  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
  router.post("/verify", verify);
  router.post("/forgot-password", forgotPassword);
  router.post("/reset-password", resetPassword);

  module.exports = router;
