const express = require('express');
const profileValidator = require('../validator/profile.validator');
const ProfileService = require('../services/profile.service');



exports.registerProfile =async function (req,res){
    try{
        const payload = req.body;

        const {error, value} = profileValidator.registerProfile.validate(payload);
        if(error !== undefined){
            throw new Error(error.details[0].message);
        }

        await ProfileService.registerProfile(payload);

        res.status(201).json({
            status:true,
            message:'profile registration sucessful'
        });
    }
    catch(err){
        res.status(400).json({
            status:false,
            message:err.message,
        })
    }
}

exports.updateProfile = async function (req,res){
    try{
         const payload=req.body;
         await ProfileService.updateProfile(payload);

         res.status(204).json({
            status:true,
            message:'updated successfully',
         })
    }catch(err){
         res.status(400).json({
            status:false,
            message:err.message,
         })
    }
}

exports.getUserProfile = async function(req,res){
    try{
          const data = await ProfileService.getProfile(req.body);
          res.status(201).json({
            status:true,
            message:"got all profile details",
            data:data
          })
    }catch(err){
           res.status(400).status.json({
              status:false,
              message:err.message
           })
    }
}