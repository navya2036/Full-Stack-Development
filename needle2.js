const needle = require('needle');
const countryName = 'Korea';  
const url = `https://restcountries.com/v3.1/name/${countryName}`;

needle.get(url, (err, res) => {
    if (err) {
        console.log("Error fetching data:", err);
    } else if (res.statusCode !== 200) {
        console.log("Failed to fetch country data. Status Code:", res.statusCode);
    } else {
        const country = res.body[0];

        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : 'N/A';
        const region = country.region;
        const population = country.population;

        const currencyKey = Object.keys(country.currencies)[0];
        const currency = country.currencies[currencyKey];
        const currencyDisplay = `${currencyKey} - ${currency.name}`;

        const languages = Object.values(country.languages).join(', ');

        console.log("Country Information:");
        console.log("Name       :", name);
        console.log("Capital    :", capital);
        console.log("Region     :", region);
        console.log("Population :", population.toLocaleString());
        console.log("Currency   :", currencyDisplay);
        console.log("Languages  :", languages);
    }
});
