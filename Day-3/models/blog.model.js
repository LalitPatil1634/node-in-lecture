const {Schema, model} = require("mongoose");
const BlogSchema = new Schema({
    title:{required:true, type:String},
    description:{required:true, type:String},
    category:{type:String, required:true}
})

const Blog = model("blog", BlogSchema)
module.exports = Blog;