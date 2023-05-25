import mongoose from "mongoose";

const imageSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true
    },
    rol:{
        type:String,
        required:true

    },
    url:{
        type:String,
        required:true
    },category:{
        type:String
    }
 
 }, {
timestamps:true
    
})

export default mongoose.model("Image",imageSchema)