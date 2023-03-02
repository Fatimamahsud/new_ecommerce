import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/user.js';

export const signUp = async(req,res) => {
    console.log("abc");
    const{firstName,lastName,contact,email,password}=req.body;
    console.log(req.body);
    try{
        const oldUser = await User.findOne({email});

        if(oldUser)
        return res.status(400).json({message:'User Already exists'});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const result = await User.create({
        firstName,
        lastName,
        email,
        contact,
        password:hashedPassword,
    });

    const token = jwt.sign(
        {email:result.email,id:result._id},
        process.env.SECRET
    );
    res.status(200).json({token});
}
catch(error){
    console.log(error);
    res.status(500).json({message:"Something went wrong"})
}
};

export const signIn = async(req,res) => {
    const{email,password}=req.body;
    console.log(req.body)
    try{
        const oldUser = await User.findOne({email});

        if(!oldUser)
        return res.status(404).json({message:'User does not exist'});
const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
if(!isPasswordCorrect)
        return res.status(400).json({message:"invalid credentials"});

    const token = jwt.sign(
        {email:oldUser.email,
        id:oldUser._id},
        process.env.SECRET
    );
    res.status(200).json({token});
}
catch(error){
    console.log(error);
    res.status(500).json({message:"Something went wrong"})
}
};

