import express from 'express'
import {createClient} from 'redis'

const app=express();
app.use(express.json());
const client= createClient();
client.connect();

app.post('/submit', async (req,res)=>{
    const {id, language, code}=req.body;


    try{
await client.lPush("submissions", JSON.stringify({id, language, code})); 
    res.json({
        message:"submission recieved"
    })
    }
    catch(e){
        res.json({
            e
        })
    }
    
       

})
app.listen(3000)


