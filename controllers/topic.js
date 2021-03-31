import TopicModel from "../model/TopicModel";

const addTopics = async (req,res)=>{
       
       const topics = JSON.parse(req.fields.topics);
       console.log(topics);
       const {subject}=req.fields;
       // res.status(400).send("error");
        if(!subject) return res.status(400).send("pls add subject");
       if(!req.fields.topics) return res.status(400).send("pls add the topics");
       console.log(topics[0]);
       const resp= await TopicModel.findOne({subject:subject});
       if(resp){
           try{
            const updatedTopic = await TopicModel.findOneAndUpdate({subject:subject},{$push: {topics:topics}});
            console.log(updatedTopic);
            if(updatedTopic){
                res.send(updatedTopic);
            }
       }catch(err)
       {
           res.send(err);
       }
        }
       else{

        const Topic = await new TopicModel({subject:subject, topics: topics} );
        Topic.save((err,result)=>{
            if(err){
                console.log(err);
                res.send(err);
            }
            res.json(result);
        });
}
       }
       
export const loadTopic=async (req,res)=>{
    const subject=req.headers.subject;
    console.log(subject);    
    const resp = await TopicModel.find({subject:subject}).exec();
    if(resp)
    {
        res.status(200).send(resp);
    }else{
    res.status(400).send("error occured while loading topics")
    }
}

// const updateTopics = async (req,res)=>{
//     const {subject,topics}=req.fields;
//     if(!subject) return res.status(400).send("pls add subject");
//    if(!topics) return res.status(400).send("pls add the topics");
//    const response = TopicModel.findOneAndUpdate({})
// }


export default addTopics;