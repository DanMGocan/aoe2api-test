/* Ping all units and write the results in a log */
const request = require('request');
const { units } = require("../data/arrays");
const fs = require("fs");
let input = [];

for (unit of Object.values(units).flat()) {
    input.push(unit.split(" ").join("").split("-").join("").toLowerCase());
}

for (unit of input) {
    request(`https://aoe2api-test.herokuapp.com/units/${unit}`, { json: true }, (err, res, body) => {
    console.log(body.name);
})
}
    
        //fs.appendFile(`../log.js`, JSON.stringify(res, null, 6), err => err ? console.error(err) : console.log(`Successfully pinged unit`));000);

/*
request(`https://aoe2api-test.herokuapp.com/units`, { json: true }, (err, res, body) => {
    console.log(body);
});
*/