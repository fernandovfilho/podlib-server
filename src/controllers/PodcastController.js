const Podcast = require('../models/Podcast');
const PodcastFeedSearch = require('../cronjobs/PodcastFeedSearch');

module.exports = {

    async store(req, res){

        const { name, feed_url, category } = req.body;

        const podcast = await Podcast.create({
            name,
            feed_url,
            category
        });

        PodcastFeedSearch.updateAPodcast(podcast);

        if(podcast){
            return res.json(podcast);
        }else{
            return res.status(400).json({ error: 'Podcast create error' });
        }

    },

    async index(req, res){

        const podcasts = await Podcast.findAll({order: ['created_at']})
        return res.json(podcasts);

    }


}
        