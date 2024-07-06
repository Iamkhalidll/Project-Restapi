import mongoose from "mongoose"; 
import argon2 from "argon2"; 
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name required"],
        min:6,
        max:255,

    },
      email:{
        type:String,
        required:[true,"email required"],
        max:255

      },
    createdDate:{
         type:Date,
         default:()=>Date.now(),
    },
   password:{
        type:String,
        required:[true,"passwrord required"],
        min:6,
        max:255
   },
   Role:{
    type:String
   }
})
userSchema.pre("save",async function(next){
  //encrypting the user"s password
  try {
     this.password = await argon2.hash(this.password);
  } catch (err) {
    console.log(err.message)
  }

  //verifying if the user is suppose to be an admin or not
  if(this.name=="khalid"){
    this.Role = "admin"
  }else{
    this.Role = "basic"
  }
  next();
});

export default mongoose.model('User',userSchema)
