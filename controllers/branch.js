import branch from "../model/branchModel"
export const addBranch = (req,res)=>{
    console.log(req.fields);
    if(!req.fields.name)return res.status(400).send("pls provide a name");
    if(!req.fields.location)return res.status(400).send("pls provide a location");
    const branchResp = new branch(req.fields);
     branchResp.save((err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
     })
}