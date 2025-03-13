// import express, mongoose
const express = require('express');
const mongoose = require("mongoose");

const postRouter = require("./routes/postRoutes")
const categoryRouter = require("./routes/categoryRoutes")

const app = express();

app.use(express.json())

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

// when route "/" is called it will automatically refer to /posts (post router)
app.use("/posts", postRouter)
app.use("/categories", categoryRouter)

app.listen(3000, async () => {
    console.log("server started")
    // mongoose.connect("mongodb://127.0.0.1:27017/blog_db").then(() => {
    //     console.log("database connected")
    // })
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_db")
    console.log("database connected")
})