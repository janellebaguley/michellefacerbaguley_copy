module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db')

        db.posts.get_all_posts()
        .then(posts => res.status(200).send(posts))
    }
}