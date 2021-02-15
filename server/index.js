require('dotenv').config()
const express = require('express'),
      ctrl = require('./controller')
const {SERVER_PORT} = process.env

const app = express()
app.use(express.json())

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))