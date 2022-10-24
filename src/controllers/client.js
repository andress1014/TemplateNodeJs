const { httpSuccess, httpError500 } = require("../helpers/handleResponse");
const { client } = require("../database/connection");
const addClient = async (req, res) => {
  try {
    const createClient = await client.create(req.body);
    httpSuccess(res, createClient);
  } catch (error) {
    httpError500(res, error);
  }
};
const allClient = async (req, res) => {
  try {
    const clients = await client.findAll();
    httpSuccess(res, clients);
  } catch (error) {
    httpError500(res, error);
  }
};
module.exports = {
  addClient,
  allClient,
};
