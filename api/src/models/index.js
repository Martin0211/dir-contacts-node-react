require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = require("../../config");
const userFactory = require("./User");
const contactFactory = require("./Contac");

const sequelize = new Sequelize(`postgres://contact_directory_postgres_user:keo5wkLMhFnfSswiQcNlI0Wr4KKOoNAq@dpg-clijj51e313s73agahsg-a/contact_directory_postgres}`, {
    logging: false,
    native: false,
});

const User = userFactory(sequelize)
const Contact = contactFactory(sequelize)

Contact.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Contact, { foreignKey: 'userId' });

module.exports = {
    conn: sequelize,
    User,
    Contact
}