const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        msg:"Hello Abhijit"
    })
})

app.listen(3000)