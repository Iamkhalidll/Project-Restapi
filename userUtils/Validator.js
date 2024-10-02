import joi  from "@hapi/joi"
//This is used to validate the user before signing up
const signupSchema = joi.object({
   name:joi.string().min(6).required(),
    email:joi.string().min(6).required().email(), 
    password:joi.string().min(6).required(),
  })
//This is  used to validate the user before logging in
const loginSchema = joi.object({
    email:joi.string().min(6).required().email(), 
    password:joi.string().min(6).required()
  })
  //This is used to validate whether info meets up with the parcel schema
  const parcelCreationSchema = joi.object({
    packageName:joi.string().min(6).required(),
    description:joi.string().min(8).required(),
    destination:joi.required(),
    presentLocation:joi.required(),
  })

 async function parcelCreationSchemaValidator(req, res, next) {
  try {
    await parcelCreationSchema.validateAsync(req.body) 
  } catch (error) {
    console.log({ message: error.details[0].message })
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
 };
 
 async function signupSchemaValidator(req, res, next) {
  try {
    await signupSchema.validateAsync(req.body)
    
  } catch (error) {
    console.log({ message: error.details[0].message })
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
 };
 
 async function loginSchemaValidator(req, res, next) {
  try {
    await loginSchema.validateAsync(req.body)
    
  } catch (error) {
    console.log({ message: error.details[0].message })
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

  export  {signupSchemaValidator,loginSchemaValidator,parcelCreationSchemaValidator}   