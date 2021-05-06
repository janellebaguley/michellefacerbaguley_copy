module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.posts.get_all_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    }
}