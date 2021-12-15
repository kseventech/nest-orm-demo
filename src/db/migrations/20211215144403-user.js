'use strict';

const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.createTable('Users', {
      name: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};

