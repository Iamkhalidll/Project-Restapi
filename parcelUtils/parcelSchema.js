import mongoose from "mongoose"
let addressSchema= new mongoose.Schema({
    address:{type:String,lowercase:true},
    city:{type:String,lowercase:true},
    state:{type:String,lowercase:true},
    country:{type:String,lowercase:true},
})
let parcelSchema = new mongoose.Schema({
    packageName:String,
    description:String,
    presentLocation:addressSchema,
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:[true],
        ref:'User'
    },
    destination:addressSchema,
    status:String
})

export default mongoose.model("Parcel",parcelSchema)