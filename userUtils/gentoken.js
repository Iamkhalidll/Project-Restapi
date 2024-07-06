import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
let maxAge = 60*20*3;
//function to generate a token
let createtoken = async(id ,Role)=>{
    return  jwt.sign({id,Role},process.env.ACCESS_TOKEN,{expiresIn:maxAge})
};

export  {createtoken,maxAge};