const Episode = require('../models/Episode');

module.exports = {

    async indexFromPodcast(req, res){

        const { podcast_id } = req.params;

        const episodes = await Episode.findAll({
            where: { podcast_id },
            order: [['pub_date', 'DESC']]
        });
        return res.json(episodes);

    }


}
        