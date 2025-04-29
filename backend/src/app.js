const express=require('express');
const authRoute=require('./routes/auth.route');
const app=express();

app.use('/auth',authRoute);

module.exports=app;