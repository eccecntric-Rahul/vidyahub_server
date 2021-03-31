import csvModel from "../model/csvModel";
import fs from 'fs';
import csvParser from "csv-parser";
const csvFile=async (req,res)=>{
    console.log(req.fields);
    const results =[];
    var finalResult =[];
    var highQues ;
    var lowQues;
    var mediumQues;
    var shuffledLow,shuffledHigh,shuffledMedium,selectedLow,selectedHigh,selectedMedium;
    if(!req.fields.highNo||!req.fields.lowNo||!req.fields.mediumNo){
        res.status(400).send("pls provide all the details");
    }
    if(req.files.csv){
       
      const reader= await fs.createReadStream(req.files.csv.path)
        .pipe(csvParser())
        .on('data',(data)=>results.push(data))
        .on('end',()=>{
            // res.json(results);
           highQues= results.filter((item)=>{if(item.level=="high")return item});
           lowQues= results.filter((item)=>{if(item.level=="low")return item});
           mediumQues= results.filter((item)=>{if(item.level=="medium")return item});

            shuffledHigh= highQues.sort(()=>0.5-Math.random());
            selectedHigh= shuffledHigh.slice(0,req.fields.highNo)

            shuffledLow= lowQues.sort(()=>0.5-Math.random());
            selectedLow= shuffledLow.slice(0,req.fields.lowNo);
            
            shuffledMedium= mediumQues.sort(()=>0.5-Math.random());
            selectedMedium= shuffledMedium.slice(0,req.fields.mediumNo);

            
            finalResult= [...selectedHigh,...selectedLow,...selectedMedium];
            console.log(finalResult);
            res.send(finalResult);
        }); 
    }
}

export default csvFile