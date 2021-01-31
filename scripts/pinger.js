/* Ping all units and write the results in a log */
const { all, categories, inputArrays } = require("../data/arrays");
const fs = require("fs");
const fetch = require("node-fetch");

let output = [];

/* Build an array with all the URL to be checked */
const arrayPromise = new Promise((resolve, reject) => {
    let pathsToCheck = [];
    for (let i = 0; i < categories.length; i++) {
        for (element of inputArrays[i]) {
                pathsToCheck.push(`${categories[i]}/${element}`.toLowerCase().replace(/[ -]/g, ''))
        }
    }
    fs.writeFileSync(`../public/js/paths.js`, JSON.stringify(pathsToCheck, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    resolve(pathsToCheck);
}) 

/* Once array is built, ping every ling and append the result to a separate array, to be written in a log file*/
arrayPromise.then(async function(result) {
    let log = {};
    for (element of result) {
        let time = new Date();
        let response = await fetch(`https://aoe2api-test.herokuapp.com/${element}`);
        let json = await response.json(); 
        if (json.name) {
            console.log(element);
            log[json.name] = time.toLocaleString();
        } else {
            console.log(element);
            log[element] = `--- MISSING ---`;
        }

    }     return log;
})
    .then(log => {
        fs.writeFileSync(`../public/js/log.json`, JSON.stringify(log, null, 6), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    })



