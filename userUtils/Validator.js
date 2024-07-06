import joi  from "@hapi/joi"
//This is used to validate the user before signing up
const signupSchemaValidator = joi.object({
   name:joi.string().min(6).required(),
    email:joi.string().min(6).required().email(), 
    password:joi.string().min(6).required(),
  })
//This is  used to validate the user before logging in
const loginSchemaValidator = joi.object({
    email:joi.string().min(6).required().email(), 
    password:joi.string().min(6).required()
  })
  //This is used to validate whether info meets up with the parcel schema
  const parcelCreationSchemaValidator = joi.object({
    packageName:joi.string().min(6).required(),
    description:joi.string().min(8).required(),
    destination:joi.required(),
    presentLocation:joi.required(),
  })

 

  export  {signupSchemaValidator,loginSchemaValidator,parcelCreationSchemaValidator}   