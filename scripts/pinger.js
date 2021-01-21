/* Ping all units and write the results in a log */
const { units } = require("../data/arrays");
const fs = require("fs");
const fetch = require("node-fetch");
let input = [];
let output = [];

for (unit of Object.values(units).flat()) {
    input.push(unit.toLowerCase().replace(/[ -]/g, ''));
}

for (unit of input) {
    let time = new Date();
    fetch(`https://aoe2api-test.herokuapp.com/units/${unit}`)
    .then(response => response.json())
    .then(data => {
       output.push(
           `The [${data.civilization }] [${data.name}] unit, of [${data.type}] type, successfully pinged at [[${time.toLocaleString()}]]`
       ) 
       return output;
    }) 
    .then((output) => {
        fs.writeFileSync(`../log.js`, JSON.stringify(output, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    });
}
