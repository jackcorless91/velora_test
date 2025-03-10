const Post = require("../models/post")

async function getPosts() {
    const posts = await Post.find()
    return posts
}

async function getPost(postId) {
    const post = await Post.findById(postId)
    return post
}

async function createPost(post) {
    const newPost = await Post.create(post)
    return newPost
}

async function updatePost(postId, post) {
    const updatedPost = await Post.findByIdAndUpdate(postId, post, { new: true })
    // option new:true updates instantly on patch request
    return updatedPost
}

async function deletePost(postId) {
    const deletedPost = await Post.findByIdAndDelete(postId)
    return deletedPost
}

// named exports (export as an object import as an object)
module.exports = {
    getPosts,
    getPost,
    updatePost,
    deletePost,
    createPost
}