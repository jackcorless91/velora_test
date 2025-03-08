// import express
const express = require('express');

const app = express();

app.get("/", (request, response) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("server started")
})

