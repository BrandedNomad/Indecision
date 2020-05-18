const express = require('express')
const path = require('path')

const server = express()

const publicPath = path.join(__dirname,'../public')
server.use(express.static(publicPath))

server.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})

const port = process.env.PORT || 3000
server.listen(port, ()=>{
    console.log("Server up and running on port: " + port)
})