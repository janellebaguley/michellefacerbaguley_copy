module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db')

        db.posts.get_all_posts(req.params.id)
        .then(post => post[0] ? res.status(200).send(post[0]) : res.status(200).send({}))
    }
}