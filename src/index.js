// import express
const express = require('express');

const postRouter = require("./routes/postRoutes")

const app = express();

app.get("/", (req, res) => {
    res.json({
        data: "hello world"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        data: "Route for hello"
    })
})

app.use("/posts", postRouter)
// when route "/" is called it will automatically refer to /posts (post router)

app.listen(3000, () => {
    console.log("server started")
})