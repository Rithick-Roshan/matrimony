const Joi = require('joi');

const profileValidator ={
    registerProfile:Joi.object({
        user:Joi.string().required(),
        fullname:Joi.string().required(),
        age:Joi.number().required(),
        gender:Joi.string().valid('male','female','other').required(),
        dateOfBirth:Joi.date().required(),
        religion:Joi.string().required(),
        cast:Joi.string().required(),
        motherTongue:Joi.string().optional(),
        education:Joi.string().required(),
        occupation:Joi.string().required(),
        income:Joi.string().optional(),
        phonenumber:Joi.number().required(),
        maritalStatus:Joi.string().valid('Single','Divorced','Widowed').default('Single'),
        location: Joi.object({
           city: Joi.string().optional(),
           state: Joi.string().optional(),
           country: Joi.string().optional(),
        }).optional(),
        fathername:Joi.string().required(),
        fathersOccupation:Joi.string().required(),
        mothername:Joi.string().required(),
        mothersOccupation:Joi.string().required(),
        familyNetwort:Joi.string().required()
    })
}

module.exports=profileValidator;