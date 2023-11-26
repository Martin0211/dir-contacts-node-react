const express = require ("express")
const routes = require("./src/router/index")
const app = express()

app.use("/api", routes)

module.exports = app