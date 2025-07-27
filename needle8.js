const needle = require('needle');
const url = 'https://api.covid19api.com/summary';

needle.get(url, (err, res) => {
    if (err) {
        console.error("Error fetching data:", err);
        return;
    }

    const countries = res.body.Countries;
    const india = countries.find(country => country.Slug === 'india');

    if (india) {
        console.log("COVID-19 Statistics for India:");
        console.log(`Total Confirmed : ${india.TotalConfirmed}`);
        console.log(`Total Deaths    : ${india.TotalDeaths}`);
        console.log(`Total Recovered : ${india.TotalRecovered}`);
    } else {
        console.log("India data not found in API response.");
    }
});
