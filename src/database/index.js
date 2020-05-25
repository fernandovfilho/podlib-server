const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Podcast = require("../models/Podcast");

const connection = new Sequelize(dbConfig);

Podcast.init(connection);

module.exports = connection;
