const mongoose = require('mongoose');

profileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true,
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    cast:{
        type:String,
        required:true
    },
    motherTongue:String,
    education:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    income:{
        type:String,
    },
    phonenumber:{
        type:Number,
        require:true
    },
    maritalStatus: {
    type: String,
    enum: ['Single', 'Divorced', 'Widowed'],
    default: 'Single',
  },location: {
    city: String,
    state: String,
    country: String,
  },
  fathername:{
    type:String,
    require:true
  },
  fathersOccupation:{
    type:String,
    require:true
  },
  mothername:{
    type:String,
    require:true
  },
  mothersOccupation:{
    type:String,
    require:true
  },
  familyNetwort:{
    type:String,
    require:true
  }

},{
    timestamps:true,
  });

const ProfileModel = mongoose.model('profile',profileSchema);
module.exports = ProfileModel;