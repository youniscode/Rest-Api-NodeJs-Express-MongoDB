require('dotenv').config()
//configure the server
const express = require('express')
const app = express()
const mongoose = require('mongoose') //configure the mongoDB to connect to database

mongoose.connect(process.env.DATABASE_URL) //Connect to a database
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Setup server to accept JSON
app.use(express.json())

// Setup Routes
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))