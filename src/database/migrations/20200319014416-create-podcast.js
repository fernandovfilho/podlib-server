'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Podcasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      feed_url: {
        type: Sequelize.TEXT
      },
      number_of_items: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Podcasts');
  }
};