const exp = require('express');
const app = exp();
const mysql = require('mysql2')
const bodyparser = require('body-parser')
const cors = require('cors')


app.use(bodyparser.json())
app.use(cors())

const db = mysql.createPool({
    port:3306,
    host:'localhost',
    user:'root',
    password:'root',
    database:'test',
})


app.get('/getdata',(req,res)=>{
    const que = 'select * from emp';
    db.query(que,(error,result)=>{
        if(error)
        {
            return res.send("Database Error")
        }
        return res.send(result);
    })
})


app.post('/senddata',(req,res)=>{
    const {username,password} = req.body;
    const que = 'insert into logindetails(username,password) values (?,?)'

    db.query(que,[username,password],(error,result)=>{
        if(error)
        {
            console.log(error);
            return res.send("database error");
        }
        return res.send("Data Inserted Successfully");
    })
})


app.listen(8000,()=>{
    console.log("Server is running");
})