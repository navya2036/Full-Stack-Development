const needle = require('needle');
const url = 'https://v2.jokeapi.dev/joke/Any';

needle.get(url, (err, res) => {
    if (err) return console.error("Error:", err);
    const joke = res.body;
    if (joke.type === 'single') {
        console.log(`Joke: ${joke.joke}`);
    } else {
        console.log(`${joke.setup} – ${joke.delivery}`);
    }
});