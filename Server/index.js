import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 

import userRoutes from "./Routes/user.js";
import productRoutes from "./Routes/product.js"



const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended:true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}));
app.use(cors());

app.use("/user",userRoutes);
app.use("/product",productRoutes);
const PORT =process.env.PORT || 8080;

mongoose.set("strictQuery",true).connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useNewUrlParser:true,

})
.then(()=>
app.listen(PORT,function(){
    console.log(`Server is up and running on port ${PORT}`);

})
)
.catch((error)=>console.log(error.message));