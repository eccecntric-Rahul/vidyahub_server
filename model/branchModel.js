import mongoose from "mongoose";
const {Schema}= mongoose;

const branchSchema= new Schema({
    name: {
        type: String,
        required: "branch name is required",
        trim: true,

    },
    location:{
        type: String,
        trim: true,
        required: "location is required",
    },
     
});


export default mongoose.model("branch",branchSchema);