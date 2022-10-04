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
        Blog.find()
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
        Blog.findOne({ _id: id })
            .then((blog) => {
                return res.status(200).json(blog)
            })
            .catch((e) => next(e))
    } catch (error) {
        next(error)
    }
}

module.exports.updateBlog = (req, res, next) => {
    const { id } = req.params;
    try {
        Blog.findByIdAndUpdate(id, req.body)
            .then((r) => res.status(200).json(r))
            .catch((e) => next(e));
    } catch (error) {
        next(error);
    }
}

// module.exports.deleteBlog = (req, res, next) => {
//     const { id } = req.params;
//     try {
//         Blog.findByIdAndDelete(id)
//             .then(() => res.json("Deleted Succesfully"))
//             .catch((e) => next(e));
//     } catch (error) {
//         next(error);
//     }
// }

module.exports.deleteBlog = (req, res, next) => {
    const { id } = req.params;
    try {
        Blog.findByIdAndUpdate(id, { deleted: true })
            .then(() => res.json("Deleted Succesfully"))
            .catch((e) => next(e));
    } catch (error) {
        next(error);
    }
}

module.exports.getDeleteBlog = (req, res, next) => {
    try {
        Blog.find({ deleted: true })
            .then((r) => res.json(r))
            .catch((e) => next(e));
    } catch (error) {
        next(error);
    }
}

module.exports.getByCategory = (req, res, next) => {
    const { category } = req.query;
    try {
        Blog.find({ category })
            .then((r) => res.status(200).json(r))
            .catch((e) => next(e));

    } catch (error) {
        next(error);
    }
}

module.exports.getByTitle = (req, res, next) => {
    const { title } = req.query;
    try {
        Blog.find({ title })
            .then((r) => res.status(200).json(r))
            .catch((e) => next(e));

    } catch (error) {
        next(error);
    }
}