const needle = require('needle');
console.log('Starting script...');

const apiKey = 'aa177f4e382004778feec0566072ddcd';  // TMDb v3 API Key
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

console.log('Sending request to:', url);

needle.get(url, (error, response) => {
    console.log('Request callback invoked.');

    if (error) {
        console.error('Error making request:', error.message);
        return;
    }

    console.log('Status code:', response.statusCode);

    if (response.statusCode !== 200) {
        console.error(`❌ Unexpected status code: ${response.statusCode}`);
        console.error(response.body);
       return;
   }

    const movies = response.body.results;
    console.log(`🎬 Top ${movies.length} Trending Movies Today:\n`);

    movies.slice(0, 5).forEach((movie, index) => {
        console.log(`Movie ${index + 1}:`);
        console.log(`   Title       : ${movie.title}`);
        console.log(`   Release Date: ${movie.release_date}`);
        console.log(`   Popularity  : ${movie.popularity}`);
        console.log(`   Overview    : ${movie.overview}\n`);
    });
});
