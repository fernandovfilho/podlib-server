const Podcast = require("../models/Podcast");
let Parser = require("rss-parser");
let parser = new Parser();

async function updateAPodcast(podcast) {
  let feed = await parser.parseURL(podcast.feed_url);

  const { description, itunes } = feed;

  // Update podcast data
  Podcast.update(
    {
      description,
      image: itunes.image,
      author: itunes.author,
    },
    { where: { id: podcast.id } }
  );
}

module.exports = {
  async store(req, res) {
    try {
      const { name, feed_url, category } = req.body;

      const podcast = await Podcast.create({
        name,
        feed_url,
        category,
      });

      updateAPodcast(podcast.get());

      if (podcast) {
        return res.json(podcast);
      } else {
        return res.status(400).json({ error: "Podcast create error" });
      }
    } catch (error) {
      return res.status(400).json({ error: "Podcast create error" });
    }
  },

  async index(req, res) {
    const podcasts = await Podcast.findAll({ order: ["created_at"] });
    return res.json(podcasts);
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await Podcast.destroy({ where: { id } });
    } catch (error) {
      return res.status(400).json({ error: "Podcast delete error" });
    }
    return res.send();
  },

  async update(req, res) {
    try {
      const { name, feed_url, category } = req.body;
      const { id } = req.params;

      await Podcast.update({ name, feed_url, category }, { where: { id } });

      let podcast = await Podcast.findByPk(id);

      updateAPodcast(podcast);

      podcast = await Podcast.findByPk(id);

      if (podcast) {
        return res.json(podcast);
      } else {
        return res.status(400).json({ error: "Podcast update error" });
      }
    } catch (error) {
      return res.status(400).json({ error: "Podcast update error" });
    }
  },
};
