const express = require("express");

const PodcastController = require("./controllers/PodcastController");

const routes = express.Router();

// Podcasts
routes.post("/podcasts", PodcastController.store);
routes.get("/podcasts", PodcastController.index);
routes.delete("/podcasts/:id", PodcastController.destroy);
routes.put("/podcasts/:id", PodcastController.update);

module.exports = routes;
