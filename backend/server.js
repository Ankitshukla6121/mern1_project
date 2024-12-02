const express= require('express');
const app= express();
const mongoose= require('mongoose');
const dotenv= require('dotenv');

dotenv.config();

const cors= require('cors');

app.use(cors());

// const User= require('./models/userModel')
app.use(express.json())
const userRouter=require('./routes/userRoute')
// app.use(express.json())


mongoose.connect(process.env.URI).then(()=>{
    console.log("connection successfully");
    app.listen(process.env.PORT || 8000,(err)=>{
        if(err)console.log(err);
        console.log('running successfully at',process.env.PORT)
    });
})
.catch((err)=>{
    console.log('erro',err)
})

// create

app.use(userRouter);