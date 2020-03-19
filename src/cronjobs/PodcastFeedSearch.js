const cronjob = require('cron').CronJob;
let Parser = require('rss-parser');
let parser = new Parser();

const Podcast = require('../models/Podcast');


module.exports = {
    
    async updateFeed(){
        
        const job = new cronjob('* * 1 * * *', async () => {
            
            const podcasts = await Podcast.findAll();
            
            podcasts.map(async podcast => {
                
                let feed = await parser.parseURL(podcast.feed_url);
                
                const { description, image, itunes } = feed;

                Podcast.update({
                    description,
                    image: image.url,
                    author: itunes.author
                }, { where: { id: podcast.id }});
                
            })
            
        }, null, true, 'America/Sao_Paulo');
        job.start();
        
    }
    
}