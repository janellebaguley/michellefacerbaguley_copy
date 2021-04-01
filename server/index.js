require('dotenv').config()
const express = require('express'),
      ctrl = require('./controllers/controller'),
      blogCtrl = require('./controllers/blogController'),
      authCtrl = require('./controllers/authController'),
      massive = require('massive'),
      session = require('express-session')
    //   mid = require('./controllers/middleware')
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

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

//blog
app.get('/api/blog', blogCtrl.getAllPosts)

//Auth
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))