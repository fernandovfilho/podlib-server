const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

const routes = require('./routes');
const cors = require('cors');

require('./database');

const PodcastFeedSearch = require('./cronjobs/PodcastFeedSearch');

PodcastFeedSearch.updateFeed();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log('Server started listen at: ', port);
});