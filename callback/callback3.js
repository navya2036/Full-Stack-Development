function notifyUser(interest) {
    console.log(`\nInterest Earned: ${interest.toFixed(2)}`);
}

function calculateInterest(principal, rate, time, callback) {
    const interest = (principal * rate * time) / 100;
    callback(interest);
}

const principal = 50000; 
const rate = 6.5;
const time = 2; 

calculateInterest(principal, rate, time, notifyUser);
