// const dotenv = require("dotenv");
// dotenv.config();
require('dotenv').config();
// console.log(process.env.MONGO_URL);
const mongoose = require("mongoose");
const conn = mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected to db"))
.catch(() => console.log("Error occured in DataBase"))
module.exports = conn;