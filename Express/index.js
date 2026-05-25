const express=require("express")
const app=express();
const users=require('./MOCK_DATA (2).json')
const {PORT}=require('./PORT.js');
const status = require("statuses");
const fs=require("fs");
const bodyParser = require("body-parser");

app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.send("Hello from Umar");
})
app.get('/api/users',(req,res)=>{
    res.json(users);
})
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    res.json(users.find((user)=>user.id===id));
})
app.get('/users',(req,res)=>{
   const html=`
   <li>${users.map((user)=>
    `<ul>${user.first_name}</ul>` 
    ).join(" ")}
   </li>
   `
   res.send(html)
})

app.route('/api/users')
.post((req,res)=>{
    const body=req.body
    console.log(body)
    users.push({id:users.length+1,...body})
    if(body){
    fs.writeFile('MOCK_DATA (2).json',JSON.stringify(users),(err)=>{
        if(err){
        console.log("Internal Server Error",err);
        res.json({"status":"500 error occured"})
        }
        else{
            res.json({"Type":"204 success response",
                status:`succees and the id is ${users.length}`
            })
        }
    })
    }
    else{
        res.json({"status":"Pending",
            "error":"404 error has occured"
        })
    }
})
app.listen(PORT,()=>{
    console.log("Server Started!");
})