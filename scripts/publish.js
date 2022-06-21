var ghpages = require('gh-pages');

ghpages.publish('dist/ie8/', function(err) {
    if (err) console.error('ERROR: ', err);
    console.log("PUBLISHED");
});