const { httpError500, httpSuccess } = require("../helpers/handleResponse");
const { user } = require("../database/connection");

const allUser = async (req, res) => {
  try {
    const users = await user.findAll();
    httpSuccess(res, users);
  } catch (error) {
    httpError500(res, error);
  }
};
const addUser = async (req, res) => {
  try {
    const createUser = await user.create(req.body);
    httpSuccess(res, createUser);
  } catch (error) {
    httpError500(res, error);
  }
};

module.exports = {
  allUser,
  addUser,
};
