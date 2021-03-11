import express from "express";
const morgan = require("morgan");
import mongoose from "mongoose";
import fs from "fs";
import cors from "cors";
import formidable from "express-formidable";
require("dotenv").config();

const app = express();
const port=process.env.PORT||8000;

// to communicate between cross origins 
app.use(cors());

// http request logger
app.use(morgan("dev"));

// for json object Data
app.use(express.json());

// for form data accessing
app.use(formidable());


// db connection 
mongoose.connect(process.env.URI,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true,useCreateIndex:true,})
.then(()=>console.log("db connected"))
.catch((err)=>console.log("DB connection error"));

fs.readdirSync("./routes").map((r)=>app.use("/api",require(`./routes/${r}`)));

app.listen(port,()=>console.log(`Server is running on Port ${port}`) );
