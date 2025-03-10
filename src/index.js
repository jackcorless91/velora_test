// import express, mongoose
const express = require('express');
const mongoose = require("mongoose");

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

app.listen(3000, async () => {
    console.log("server started")
    // mongoose.connect("mongodb://127.0.0.1:27017/blog_db").then(() => {
    //     console.log("database connected")
    // })
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_db")
    console.log("database connected")
})