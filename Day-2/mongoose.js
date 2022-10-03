const express = require("express");
const conn = require("./db1");
const Movie = require("./Model")
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello")
})

app.get("/data", async (req, res) => {
    let m = await Movie.find();
    res.json(m)
})

app.post("/data", (req, res) => {
    const m = new Movie(req.body);
    m.save();
    res.json(m);
})

app.listen(8080, async() => {
    await conn;
    console.log("Server is connected to Db");
})