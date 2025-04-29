const express=require('express');
const application=require('./src/app');
const connectDb = require('./src/util/db');

const app=express();

connectDb();


app.use(express.json())
app.use(application)

app.get('/',(req,res)=>{
    res.send('hello word');
})

const PORT=3050;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})