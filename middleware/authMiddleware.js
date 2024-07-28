import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()
//middleware function to check authorizaion
const requireAuth = (req,res,next)=>{
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token){
            let decodedToken=  jwt.verify(token,process.env.ACCESS_TOKEN);
            let user = decodedToken
            req.user = user
            next();
        }
        else{ res.status(401).json({err:'unauthorised, you need to be logged in'}); }
    }
    catch(err){
        console.log(err.message)
        res.status(400).json({err:err.message})
    }
       

}


export default requireAuth;