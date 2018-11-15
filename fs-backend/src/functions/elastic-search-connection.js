import elasticsearch from 'elasticsearch';


var client = new elasticsearch.Client({
    host: "http://uprj10509:Y3=o'wGvp@40.71.47.14:9200/",
    requestTimeout: Infinity, // Tested
    keepAlive: true // Tested
});

module.exports = client;