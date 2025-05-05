const express = require('express');
const {dashDetails} = require('../controller/dashboard.controller')
const route=express.Router();

route.get('/getsimpleDetails',dashDetails);

module.exports=route;