const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Podcast = require('../models/Podcast');
const Episode = require('../models/Episode');

const connection = new Sequelize(dbConfig);

Podcast.init(connection);
Episode.init(connection);

module.exports = connection;