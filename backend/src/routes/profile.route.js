const express = require('express');

const profile = require('../controller/profile.controller');

const route = express.Router();

route.post('/register',profile.registerProfile);
route.post('/update',profile.updateProfile);
route.get('/getprofile',profile.getUserProfile);




module.exports = route;