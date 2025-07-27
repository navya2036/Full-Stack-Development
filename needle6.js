const needle = require('needle');
const url = 'https://randomuser.me/api/';

needle.get(url, (err, res) => {
    if (err) {
        console.error("Error fetching user:", err);
        return;
    }

    const user = res.body.results[0];

    console.log("Random User Profile:");
    console.log(`Full Name : ${user.name.first} ${user.name.last}`);
    console.log(`Gender    : ${user.gender}`);
    console.log(`Country   : ${user.location.country}`);
    console.log(`Email     : ${user.email}`);
});
