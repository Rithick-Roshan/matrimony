const express=require('express');
const authRoute=require('./routes/auth.route');
const profileRoute=require('./routes/profile.route');
const dashboardRoute=require('./routes/dashboard.route')
const app=express();

app.use('/auth',authRoute);
app.use('/profile',profileRoute);
app.use('/dashboard',dashboardRoute);

module.exports=app;