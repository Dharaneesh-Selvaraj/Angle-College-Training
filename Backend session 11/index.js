const express = require('express');
const app = express();
const {MongoClient} = require('mongodb')
const bodyparser = require('body-parser')


app.use(bodyparser.json())


//This URL is used to connect to the MONGO COLUD(ATLAS)
//USERNAME
//PASSWORD
//DATABASE NAME
//mongodb+srv://<USERNAME>:<db_password>@cluster0.stgglf3.mongodb.net/<DATABASE NAME>?retryWrites=true&w=majority&appName=Cluster0
const url = 'mongodb+srv://Dharaneesh:root@cluster0.stgglf3.mongodb.net/MyData?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(url);

  
  client.connect()
    .then(() => {
      console.log("✅ Connected to MongoDB Atlas");
      // You can use client.db() here
    })
    .catch(err => {
      console.error("❌ MongoDB connection error:", err);
    });

    app.get('/get',async (req,res)=>{
        try{
            const empdata= client.db().collection('Emp Data').find().toArray();
            return res.send(empdata);
        }
        catch(err)
        {
            return res.send("Cant get Data");
        }
    })

    app.post('/insert',async (req,res)=>{
        try{
            const insert = await client.db().collection('Emp Data').insertOne(req.body);
            return res.send("Data is Inserted");
        }
        catch(err)
        {
            res.send("Data Not Inserted ",err)
            console.log(err);
        }
    })

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})