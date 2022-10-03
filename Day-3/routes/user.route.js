const express = require("express");
const { createUser, loginUser, findAllUsers, findUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup", createUser)
router.post("/login", loginUser)
router.get("/", findAllUsers)
router.get("/:id", findUser)
module.exports = router;