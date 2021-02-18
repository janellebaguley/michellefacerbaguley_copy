require('dotenv').config()
const express = require('express'),
      ctrl = require('./controllers/controller'),
      blogCtrl = require('./controllers/blogController'),
      authCtrl = require('./controllers/authController'),
      mid = require('./controllers/middleware')
const {SERVER_PORT} = process.env

const app = express()
app.use(express.json())

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

//blog
app.get('/api/posts', blogCtrl.getAllPosts)
app.post('/api/post', blogCtrl.addPost)
app.delete('/api/post/:id', blogCtrl.deletePost)
app.put('/api/post/:id', blogCtrl.editPost)

//Auth
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)
app.post('/api/users/all', mid.adminsOnly)
app.get('/api/user', mid.usersOnly)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))