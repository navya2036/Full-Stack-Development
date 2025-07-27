const needle = require('needle');
const url = 'https://api.thecatapi.com/v1/images/search';

needle.get(url, (err, res) => {
    if (err) return console.error("Error:", err);
    console.log(`Cat Image URL: ${res.body[0].url}`);
});
