const express = require ("express")
const routes = require("./src/router/index")
const cors = require('cors');

const app = express()

app.use(cors());

app.use(express.json());

app.use("/api", routes)

module.exports = app