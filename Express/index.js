const express=require("express")
const app=express();
const users=require('./MOCK_DATA (2).json')
const {PORT}=require('./PORT.js')
app.get('/',(req,res)=>{
    res.send("Hello from Umar");
})
app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/api/users',(req,res)=>{
   const html=`
   <li>${users.map((user)=>
    `<ul>${user.first_name}</ul>` 
    ).join(" ")}
   </li>
   `
   res.send(html)
})
app.listen(PORT,()=>{
    console.log("Server Started!");
})