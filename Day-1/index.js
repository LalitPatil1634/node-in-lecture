import express from "express";
import connection from "./db.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
})

app.get("/home", (req, res) => {
    res.send("Home page")
})

app.get("/about", (req, res) => {
    res.send("About")
})


app.listen(8080, async() => {
    await connection;
    console.log("Server started on 8080");
});