import express, {Application,Request,Response} from "express";
import "dotenv/config"

const app:Application = express();

const PORT = process.env.PORT || 7000;

app.get("/",(req:Request,res:Response)=>{
    return res.json({"ststus":200, "message": "App is up"})
})

app.listen(PORT,()=>{
    console.log('Server is up on', PORT)
})