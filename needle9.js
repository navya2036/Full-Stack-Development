const needle = require('needle');
const url = 'https://dog.ceo/api/breeds/image/random';

needle.get(url, (err, res) => {
    if (err) return console.error("Error fetching image:", err);
    console.log(`Dog Image URL: ${res.body.message}`);
});
