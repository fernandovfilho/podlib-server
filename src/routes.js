const express = require('express');

const PodcastController = require('./controllers/PodcastController');
const EpisodeController = require('./controllers/EpisodeController');

const routes = express.Router();

// Podcasts
routes.post('/podcasts', PodcastController.store);
routes.get('/podcasts', PodcastController.index);

// Episodes
routes.get('/episodes/:podcast_id', EpisodeController.indexFromPodcast);

module.exports = routes;