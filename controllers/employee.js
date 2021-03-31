import employee from "../model/employeeModel";

export const addEmployee= async (req,res)=>{

    if(!req.fields.branch)return res.status(400).send("Pls Provide the Branch");
    if(!req.fields.position)return res.status(400).send("Pls Provide the position");
    if(!req.fields.name)return res.status(400).send("Pls Provide the name");
    if(!req.fields.emailAdd)return res.status(400).send("Pls Provide the email");
    if(!req.fields.phoneNo)return res.status(400).send("Pls Provide the Phone No");
    const employeeResp = new employee(req.fields);
    employeeResp.save((err,result)=>{
        if(err){
            console.log(err);
            return res.status(400).send(err);
        }
        console.log(result);
        return res.json(result);
    });
}