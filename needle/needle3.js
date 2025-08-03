const needle = require('needle');
const API_KEY = 'w6wKEQEtkZALi1NqYRS5Ehp0XoQrPsQQ';
const COUNTRY_CODE = 'IN';
const YEAR = 2025;

const apiURL = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${COUNTRY_CODE}&year=${YEAR}`;

needle.get(apiURL, (error, res) => {
    if (error) {
        console.error("Error fetching holidays:", error);
        return;
    }

    const holidays = res.body?.response?.holidays;

    if (holidays && holidays.length > 0) {
        console.log(`\nNational Holidays in India for the year ${YEAR}:\n`);
        holidays
            .filter(h => h.type.includes("National holiday"))
            .forEach(h => {
                console.log(`Date     : ${h.date.iso}`);
                console.log(`Holiday  : ${h.name}`);
                console.log(`Type     : ${h.type.join(', ')}`);
                console.log('---------------------------');
            });
    } else {
        console.log("No holidays found.");
    }
});
