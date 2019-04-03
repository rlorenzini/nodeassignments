'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'Blogs',
      'Published',
      Sequelize.BOOLEAN
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'Blogs',
      'Published'
    );
  }
};
