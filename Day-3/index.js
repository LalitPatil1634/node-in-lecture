const express = require("express");
const conn = require("./config/db");
require('dotenv').config();
const userRouter = require("./routes/user.route")
const app = express();
app.listen(8080, async () => {
    await conn;
    console.log(`Connected to the 8080`);
})

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use("/user", userRouter)
// console.log(process.env.PORT);