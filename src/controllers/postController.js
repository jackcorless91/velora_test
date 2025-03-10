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

function getPosts() {
    return posts
}

module.exports = {
    getPosts
}
    // named exports (export as an object import as an object)