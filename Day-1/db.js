import mongoose, { connect } from "mongoose";

const connection = mongoose
    .connect("mongodb://localhost:27017/demo")
    .then(() => console.log("connected to db"))
    .catch(() => console.log("Error"));

export default connection;