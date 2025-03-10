const express = require('express');

const postRouter = express.Router()

const posts = [
    {
        title: "post 1",
        body: "post 1 body",
        is_published: false
    },
    {
        title: "post 2",
        body: "post 2 body",
        is_published: false
    }
]

postRouter.get ("/", (req, res) => {
    res.json(posts)
})

module.exports = postRouter