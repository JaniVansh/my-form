const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser')

// set up port
const port = 4001;

app.use(express.json());
app.use(bodyparser.json())
app.use(cors());

const db = require('./lib/db')

app.get("/home",(req,res)=>{
    
let fetch = "SELECT * FROM `users`";

db.query(fetch,(err,result)=>{
    if(err) throw err;
    res.send(result)
})


})

app.post("/insertdata/user",(req,res)=>{


    let bodydata = {
        name:"user4",
        email:"user4@gmail.com",
        password:"user4"
    }
    
    let query = `INSERT INTO user 
    (name, email, password) VALUES (?, ?, ?);`;

    db.query(query,[req.body.name,req.body.email,req.body.password],(err,result)=>{
        if(err) throw console.log(err);
        console.log("Data send successfully");
    })
    
   

})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`app listen on port ${port}`);
})