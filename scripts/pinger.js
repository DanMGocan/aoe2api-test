/* Ping all units and write the results in a log */
const request = require('request');
const { units } = require("../data/arrays");
const fs = require("fs");
let unitsflat = Object.values(units).flat();
let i = 0;
/*
const pinger = data => {
    console.log(data);
        for(const unit of Object.values(data).flat()){
            console.log(`https://aoe2api-test.herokuapp.com/units/${unit.split(" ").join("").split("-").join("").toLowerCase()}`);
            request(`https://aoe2api-test.herokuapp.com/units/${unit.split(" ").join("").split("-").join("").toLowerCase()}`, { json: true }, (err, res, body) => {
                    fs.appendFile(`../log.js`, JSON.stringify(body, null, 6), err => err ? console.error(err) : console.log(`Successfully pinged units`));
                })
    }
}
*/
setInterval(function(){ 
    request(`https://aoe2api-test.herokuapp.com/units/${unitsflat[i].split(" ").join("").split("-").join("").toLowerCase()}`, { json: true }, (err, res, body) => {
                     i++;
    console.log(res);
                    fs.appendFile(`../log.js`, JSON.stringify(body, null, 6), err => err ? console.error(err) : console.log(`Successfully pinged units`));
                })
}, 1000);

/* Ping all civilizations and write the results in a log */

/* Ping all technologies and write the results in a log */

/* Ping all buildings and write the results in a log */