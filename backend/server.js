import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app=express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());



mongoose.connect('mongodb://localhost:27017/customers')

    .then(()=>console.log("Connected to DB"))
    .catch(err=>console.log('error'));

//create a object
const userSchema= new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    email:String,
    password: String,
});

const user=mongoose.model('User',userSchema);

app.post('/customer', async(req,res)=>{
    const{firstname,lastname,address,email,password}=req.body;

    try{
        const newUser=new user({
            firstname,lastname,address,email,password,
        });
        await newUser.save();
        res.status(201).json({message:"User registered succesfully"})
    }
    catch(error){res.status(500).json({message:"Error 1"})}
})


app.listen(5001,()=>{
   // connectDB();
    console.log("Server started at http://localhost:5001");
});