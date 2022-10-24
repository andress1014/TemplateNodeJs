const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { swaggerDocs: V1swaggerDocs } = require("./documentation/swagger");


const port = process.env.SERVER_PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", require("./routes"));
V1swaggerDocs(app, port);

module.exports = { app, port };
