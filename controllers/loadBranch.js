import BranchModel from "../model/branchModel";
const loadBranch= async (req,res)=>{

    const resp = await BranchModel.find().exec();
    console.log(resp);
    res.status(200).send(resp);
}

export default loadBranch;