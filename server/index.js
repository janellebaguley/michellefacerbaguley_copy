require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express'),
      ctrl = require('./controllers/controller'),
      blogCtrl = require('./controllers/blogController')
      massive = require('massive'),
      session = require('express-session');
const path = require('path')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 *24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then((db) => {
    app.set('db', db)
    console.log('db connected')
})
app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,  '../build/index.html'))
})

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

//blog
app.get('/api/blog/:id', blogCtrl.getAllPosts)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))