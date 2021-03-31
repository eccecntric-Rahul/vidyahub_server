import mongoose from "mongoose";
const {Schema}= mongoose;

const csvSchema= new Schema({
    csv: {
        data: Buffer,
        contentType: String,
    },
    result: {
        data: Buffer,
        contentType: String,
    },
    name: {
        type: String,
        trim: true,
    },
    lowNo: {
        type: String,
        trim: true,
    },
    highNo: {
        type: String,
        trim: true,
    },
    mediumNo: {
        type: String,
        trim: true,
    },
});

export default mongoose.model("csv",csvSchema);