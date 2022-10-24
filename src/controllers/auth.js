const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { httpError500, httpSuccess } = require("../helpers/handleResponse");
const { user } = require("../database/connection");



const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const logUser = await user.findOne({ 
      where: { email }
     });
    if (!logUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, 'a');
    return console.log(isPasswordValid)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(logUser, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    res.json(token)
    // httpSuccess(res, token);
  } catch (error) {
    console.log(error)
    httpError500(res, error);
  }
};

module.exports = {
  login,
};
