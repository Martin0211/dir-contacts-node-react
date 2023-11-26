require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const userFactory = require("./User");
const contacFactory = require("./Contac");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

const User = userFactory(sequelize)
const Contac = contacFactory(sequelize)

module.exports = {
    conn: sequelize,
    User,
    Contac
}