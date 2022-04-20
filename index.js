//server.js 
const express = require('express')
var bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const contacts = []

const PORT = process.env.PORT || 3000

const contactRoute = require('./api/routes/contact')



app.use((req, res, next) => {
    console.log('middleware')
    next()
})


app.get('/', (req, res) => {
    res.send('<h3>HELLOW WasdasdORLDasdfasdfa sdf </h3>')
})

app.get('/api/contact', (req, res) => {
    res.status(200).json({
        contacts
    })
})
app.post('/api/contact/store', (req, res) => {
    // const name = req.body.name
    // const email = req.body.email 

    contacts.push({
        name: req.body.name,
        email: req.body.email
    })
    res.status(201).json({
        message : 'succeffully data',
    })
})

app.listen(PORT , () => {
    console.log(`server is running ${PORT}`)
})



const contact = [
    {name: 'bokhtiar', email : 'bokhtiar@gmail.com'},
    {name: 'joy', email: 'joy@gmail.com'},
    {name: 'kawdik', email: 'kawdik@gmail.com'}
]