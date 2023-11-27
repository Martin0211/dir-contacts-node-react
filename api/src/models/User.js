const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
