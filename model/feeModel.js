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
    phoneNo:{
        type: Number,
        required: "phone no is required",
    },
    status:{
        type: String,
        trim: true,
        required: "status is required",
    },
    scholarship:{
        type: Number,
        trim: true,
        required: "scholarship is required",
    },
    feePayable:{
        type: Number,
        trim: true,
        required: "fee Payable is required",
    },
    enrolmentFee:{
        type: Number,
        trim: true,
        required: "enrolment fee is required",
    },
    totalCourseFee:{
        type: Number,
        trim: true,
        required: "total course fee is required",
    },
    feeInstallments:{
        type: Number,
        trim: true,
        required: "fee installment no is required",
    },
    list:[{installment: String,
        date: String,
        status: String,
    }]
});


export default mongoose.model("fee",feeSchema);