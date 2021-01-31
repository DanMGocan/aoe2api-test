/* Write and restart statistics module */
const { all, categories, inputArrays } = require("../data/arrays");
const fs = require("fs");
const mappedArray = [];

for (array of inputArrays) {
    mappedArray.push(
        array.map(element => element.toLowerCase().replace(/[ -]/g, ''))
    );
}

const statsScript = (categories, inputArrays) => {
    let resultsObj = {};
    for (category in categories) {
        const objToAdd = inputArrays[category].reduce((element, key) => ({...element, [key]: 0}), {});
        resultsObj[categories[category]] = {
            ...objToAdd
        }
    }
    return resultsObj;
}
    
let output = statsScript(categories, mappedArray);
fs.writeFileSync(`../data/statistics/statistics.json`, JSON.stringify(output, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote units`));
