const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect('mongodb://localhost:27017/matrimonyDb')
    .then(()=>{
        console.log('Connected to MongoDB successfully')
    })
    .catch((err)=>{
        console.error('Error connecting to MongoDB:', err.message)
    })
}


module.exports=connectDb;