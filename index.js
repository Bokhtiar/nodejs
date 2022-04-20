//server.js 
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send('<h3>HELLOW WasdasdORLDasdfasdfa sdf </h3>')
})

app.get('/post', (req, res) => {
    res.send('post page')
})


app.listen(PORT , () => {
    console.log(`server is running ${PORT}`)
})
