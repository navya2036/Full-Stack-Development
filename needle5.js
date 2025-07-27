const needle = require('needle');
const wordToSearch = 'auspicious';
const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;

needle.get(apiURL, (err, response) => {
    if (err) {
        console.error("Error fetching word definition:", err);
        return;
    }

    const data = response.body;

    const entry = data[0];
    const meaning = entry.meanings?.[0];
    const definition = meaning?.definitions?.[0];

    if (entry.word && meaning && definition) {
        console.log("Dictionary Lookup Result:");
        console.log(`Word           : ${entry.word}`);
        console.log(`Part of Speech : ${meaning.partOfSpeech}`);
        console.log(`Definition     : ${definition.definition}`);
    } else {
        console.log(`Incomplete data received for word: ${wordToSearch}`);
    }
});
