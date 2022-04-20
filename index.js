//server.js 
const express = require('express')

const app = express()
const POST = process.env.PORT || 3000
app.listen(POST , () => {
    console.log(`server is running ${PORT}`)
})
