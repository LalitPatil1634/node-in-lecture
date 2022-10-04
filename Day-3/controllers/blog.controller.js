const Blog = require("../models/blog.model")

module.exports.createBlog = (req, res, next) => {
    try {
        const { title, description, category } = req.body
        if (!title | !description | !category) {
            return res.status(202).json({ msg: "Fill the details correctly" })
        }
        Blog.create(req.body)
            .then((blog) => {
                return res.status(200).json(blog);
            })
            .catch((e) => next(e));
    } catch (error) {
        next(error);
    }
}
module.exports.getAllBlogs = (req, res, next) => {
    try {
        Blog.find
            .then((blogs) => {
                return res.json(blogs)
            })
            .catch((e) => next(e))
    } catch (error) {
        next(error)
    }
}

module.exports.getBlog = (req, res, next) => {
    try {
        const { id } = req.params;
        Blog.findOne({_id:id})
            .then((blog) => {
                return res.status(200).json(blog)
            })
            .catch((e) => next(e))
    } catch (error) {
        next(error)
    }
}