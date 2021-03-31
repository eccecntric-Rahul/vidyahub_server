import mongoose from "mongoose";
const {Schema} = mongoose;

const TopicSchema= new Schema({
    subject: {
        type: String,
        trim: true,
        required: "subject name is required",
    },
    topics: [{
        type: String,
        trim: true,
    }],
});

export default mongoose.model("topic",TopicSchema);