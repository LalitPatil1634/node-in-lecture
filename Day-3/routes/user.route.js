const express = require("express");
const { createUser, loginUser, findAllUsers, findUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", findAllUsers)
router.get("/:id", findUser)
router.post("/signup", createUser)
router.post("/login", loginUser)
module.exports = router;