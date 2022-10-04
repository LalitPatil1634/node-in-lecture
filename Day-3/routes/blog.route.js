const { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog, getDeleteBlog, getByCategory, getByTitle } = require("../controllers/blog.controller");


const router = require("express").Router();
router.post("/create", createBlog);
router.put("/delete/:id", deleteBlog)
router.get("/trash", getDeleteBlog)
router.get("/category", getByCategory)
router.get("/title", getByTitle)
router.get("/:id", getBlog)
router.get("/", getAllBlogs)
router.put("/:id", updateBlog);
module.exports = router;