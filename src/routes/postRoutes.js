const express = require('express');

const { getPosts } = require("../controllers/postController")

const postRouter = express.Router()

// GET - /posts
postRouter.get ("/", (req, res) => {
    const posts = getPosts()
    res.json(posts)
})

module.exports = postRouter
// default export