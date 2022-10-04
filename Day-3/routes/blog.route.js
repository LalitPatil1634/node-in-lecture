const { createBlog, getAllBlogs, getBlog } = require("../controllers/blog.controller");


const router = require("express").Router();
router.post("/create", createBlog);
router.get("/", getAllBlogs)
router.get("/:id",getBlog)
module.exports = router;