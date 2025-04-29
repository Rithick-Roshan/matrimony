const express = require('express'); 

const {
    register,
    login,
    logout,
    verify,
    forgotPassword,
    resetPassword,
  } = require("../controller/auth.controller");
  const router = express.Router();
  
  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
  router.post("/verify", verify);
  router.post("/forgot-password", forgotPassword);
  router.post("/reset-password", resetPassword);

  module.exports = router;
