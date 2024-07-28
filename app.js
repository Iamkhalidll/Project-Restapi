
import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"; 
let app = express(); 
import dotenv from "dotenv"
dotenv.config()
//This is a function for connecting into the database
connect()
async function connect(){
    try{
     //connecting to the database
     await mongoose.connect(process.env.MONGO_URI)
     console.log("database has been connected")
    }
    catch(err){
        //handling err
        console.log(err.message)
    }
}
// This is used to ensure we can get info from the cookies
app.use(cors({origin:"*"}))
//These are middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
import backEndRoutes from "./routes/backEndRoutes.js"
app.use('/api/v1' ,backEndRoutes)
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running")
})
export default app