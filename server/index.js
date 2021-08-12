const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
});

const port = process.env.PORT || 5050;

app.listen(port, ()=> console.log(`Up and running on Port ${port}, Captain!`));