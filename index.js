const express=require('express')
const app=express()
const helmet=require('helmet')
app.use(helmet())

app.listen(8000,()=>{
    console.log("Server Listening port is 8000")
})