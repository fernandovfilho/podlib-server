const cronjob = require('cron').CronJob;
let Parser = require('rss-parser');
let parser = new Parser();
const moment = require('moment');

const Podcast = require('../models/Podcast');
const Episode = require('../models/Episode');


module.exports = {
    
    async updateFeed(){
        
        const job = new cronjob('* * 1 * * *', async () => {
            
            const podcasts = await Podcast.findAll();
            
            podcasts.map(async podcast => {
                
                let feed = await parser.parseURL(podcast.feed_url);
                
                const { description, image, itunes, items } = feed;
                
                // Update podcast data
                try {
                    
                    Podcast.update({
                        description,
                        image: image.url,
                        author: itunes.author
                    }, { where: { id: podcast.id }});
                    
                } catch (error) {
                    
                }
                
                // Search and add a new episode
                items.forEach(async item => {
                    
                    try {
                        
                        Episode.findOrCreate({ 
                            where: {
                                audio_url: item.enclosure.url,
                                podcast_id: podcast.id
                            },
                            defaults: {
                                title: item.title,
                                description: item.contentSnippet,
                                type_audio: item.enclosure.type,
                                length_audio: item.enclosure.length,
                                pub_date: item.isoDate,
                                image: item.itunes.image,
                                keywords: item.itunes.keywords
                            }
                        })
                        
                    } catch (error) {
                        
                    }
                    
                })
                
            })
            
        }, null, true, 'America/Sao_Paulo');
        job.start();
        
    }
    
}