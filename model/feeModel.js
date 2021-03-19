
import mongoose from "mongoose";

const {Schema} = mongoose;
const {ObjectId}=mongoose.Schema;
const feeSchema = new Schema({

    name: {
        type: String,
        required: "Name is required",
    },
    emailAdd: {
        type: String,
        required: "Email is required",
        unique: true,
    },
    amount: {
        type: Number,

    },
    status:{
        type: String,

    },
    feePayDay:{
        type: Date,
    },
    user:{
        type: ObjectId,
        ref: "studentadmission",
    },

});


export default mongoose.model("fee",feeSchema);