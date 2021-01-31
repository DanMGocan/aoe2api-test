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
    fs.writeFileSync(`../logs/paths.js`, JSON.stringify(pathsToCheck, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    resolve(pathsToCheck);
}) 

/* Once array is built, ping every ling and append the result to a separate array, to be written in a log file*/
arrayPromise.then(async function(result) {
    log = [];
    for (element of result) {
        let time = new Date();
        let toWrite = {};
        let response = await fetch(`https://aoe2api-test.herokuapp.com/${element}`);
        let json = await response.json(); 
        if (json.name) {
            toWrite = `<h6>${json.name}<h4><p> has been succesfully pinged at URL ${element}, at ${time.toLocaleString()} ${time.getMilliseconds()}<p><br>`;
            log.push(toWrite);
        } else {

            toWrite = {
                missingUnit: element,
                message: "[[[ UNIT WAS NOT FOUND AT URL ]]]"
            };
            log.push(toWrite);
            
        }

    }     return log;
})
    .then(log => {
        fs.writeFileSync(`../logs/log.html`, log, err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    })



