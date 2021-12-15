'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
          queryInterface.addColumn('cats', 'userName', {
          type: Sequelize.DataTypes.STRING
          }, { transaction: t })
      ]);
  });
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('cats', 'userName', { transaction: t }),
    ]);
  }
};