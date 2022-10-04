const { nextTick } = require("process");
const User = require("../models/user.model")

module.exports.createUser = async (req, res) => {
    // const user = await User.create(req.body)
    const { name, email, password, number } = req.body;
    try {
        if (!name | !email | !password | !number) {
            return res.status(202).json({ msg: "Fill the details correctly" })
        }
        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return res.status(202).json({ msg: "Email already exist" })
        }
        const user = await User.create(req.body)
        return res.status(200).json(user);
    } catch (e) {
        next(e);
    }
}

module.exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email | !password) {
            return res.json("Fill correct details")
        }
        const checkEmail = await User.findOne({ email });
        if (!checkEmail) {
            return res.status(202).json({ message: "User doesn't exist" })
        }
        if (checkEmail.password !== password) {
            return res.status(202).json({ message: "Invalid Credentials" })
        }
        return res.status(202).json({ message: "Logged in Success" })
    } catch (error) {
        next(error);
    }
}
module.exports.findAllUsers = (req, res, next) => {
    User.find().then((r) => {
        return res.json(r)
    })
        .catch((e) => next(e))
};

module.exports.findUser = (req, res, next) => {
    const { id } = req.params;
    User.findOne({ _id: id })
    .then((r) => {
        return res.json(r);
    })
    .catch((e) => next(e));
}