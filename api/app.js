require('dotenv').config();
const express = require("express");
const routes = require("./src/router/index");
const cors = require('cors');
const { FRONTEND_URL } = require("./config");

const app = express();

app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use(express.json());

app.use("/api", routes);

module.exports = app;