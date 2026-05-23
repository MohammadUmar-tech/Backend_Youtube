const http=require('http')
const fs=require("fs")
const url=require('url')
const PORT=require('./PORT')

const MyServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end()
    const My_url=url.parse(req.url,true)
    console.log(My_url)
    
    const input=`${Date.now()} : ${req.url}:New Request Arrive\n`
    fs.appendFile('umar.txt',input,(err,data)=>{
        if(err){
            req.end("500 error occured")
        }
        const username=My_url.query.myname;
        const age=My_url.query.age
        switch(My_url.pathname){
            case '/':res.end("This is Our Home page")
            break
            case '/about':res.end(`I am ${My_url.query.myname} and my age is ${My_url.query.age}`)
            break
            case "/search":res.end(`My search is ${My_url.search}`)
            break
            default:res.end("404 error")
            break
        }
    })
})

MyServer.listen(PORT,()=>{
    console.log("Server Started!")
})