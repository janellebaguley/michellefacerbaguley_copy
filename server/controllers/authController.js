const bcrypt = require('bcryptjs');
const { captureRejectionSymbol } = require('nodemailer/lib/mailer');

module.exports = {
    register: async(req, res) => {
        const { username, email, password, profilePicture } = req.body
        const db = req.app.get('db')

        const [foundUser] = await db.users.check_user({ email })
        if(foundUser){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.users.register_user({ username, email, hash, profilePicture })

        req.session.user = newUser
        res.status(201).send(req.session.user)
    },
    login: async(req, res) => {
        const {username, password} = req.body
        const foundUser = await req.app.get('db')
        get_user([username])

        const user = foundUser[0]
        if(!user) {
            return res.status(401).send('user not found')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password')
        }
        req.session.user = {isAdmin: user.is_admin, id: user.id, username: user.username}
        return res.send(req.session.user)
     },
    logout: (req, res) => {
         req.session.destroy()
         res.sendStatus(200)
     }
}