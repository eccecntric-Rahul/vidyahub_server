import mongoose from "mongoose";
const {Schema}= mongoose;

const employeeSchema= new Schema({
    branch: {
        type: String,
        trim: true,
        required: "Branch is required",
    },
    position: {
        type: String,
        required: "position is required",
        trim: true,
    },
    subject: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    emailAdd: {
        type: String,
        required: "email is required",
        trim: true,
    
    },
    phoneNo: {
        type: Number,
        maxLength: 10,
        minLength: 9,
        trim: true,
        required: "phone No is required",
    },
    
});

employeeSchema.methods.checkPosition=function(position){
    if(this.position==position){
        
        return true;

    }
}


export default mongoose.model("employee",employeeSchema);