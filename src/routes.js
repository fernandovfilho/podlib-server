const express = require('express');

const PodcastController = require('./controllers/PodcastController');

const routes = express.Router();

routes.post('/podcast', PodcastController.store);

module.exports = routes;