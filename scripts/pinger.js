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
    

/* Ping all URL */
arrayPromise.then(async function(result) {

    for (element of result) {
        let time = new Date();
        let toWrite = {};
        let response = await fetch(`https://aoe2api-test.herokuapp.com/${element}`);
        let json = await response.json(); 
        if (json.name) {
            /*
            toWrite = {
                unitName: json.name,
                pingedAt: element,
                time: time.toLocaleString()
            }*/
            toWrite = `<h6>${json.name}<h6><p> has been succesfully pinged at URL ${element}, at ${time.toLocaleString()} ${time.getMilliseconds()}<p><br>`;
            fs.appendFileSync(`../logs/log.html`, toWrite, err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 

        } else {

            toWrite = {
                missingUnit: element,
                message: "[[[ UNIT WAS NOT FOUND AT URL ]]]"
            };
            
        }
        //output.push(`<p>${toWrite}</p><br>`);
    }
    //fs.writeFileSync(`../log.html`, JSON.stringify(output, null, 6), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
})

module.exports = {
    output
}


