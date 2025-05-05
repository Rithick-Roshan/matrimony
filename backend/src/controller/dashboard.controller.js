const express = require('express');

const DashboardService = require('../services/dashboard.service');

exports.dashDetails=async function(req,res){
        try{

            const data=await DashboardService.getSimpleDetails(req.body);
            res.status(200).json({
                status:true,
                message:"all users simple datas sends ",
                data:data
            })

        }catch(err){
                res.status(400).json({
                    status:false,
                    message:err.message
                })
        }
}