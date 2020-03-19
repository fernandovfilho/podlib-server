const Podcast = require('../models/Podcast');

module.exports = {

    async store(req, res){

        const { name, feed_url } = req.body;

        const podcast = await Podcast.create({
            name,
            feed_url
        })

        if(podcast){
            return res.json(podcast);
        }else{
            return res.status(400).json({ error: 'Podcast create error' });
        }

    }


}
        