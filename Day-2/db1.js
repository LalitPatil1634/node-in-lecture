const mongoose = require("mongoose")

const connection = mongoose
    .connect("mongodb://localhost:27017/IMDB")
    .then(() => console.log("connected to db"))
    .catch(() => console.log("Error"));

module.exports = connection;