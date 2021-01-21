/* Ping all units and write the results in a log */
const { all } = require("../data/arrays");
const fs = require("fs");
const fetch = require("node-fetch");
let categories = Object.keys(all);
let output = [];

let inputUnits = Object.values(all.units).flat()
console.log(typeof inputUnits);
let inputTechnologies = Object.values(all.technologies).flat();
let inputBuildings = Object.values(all.buildings).flat();
let inputCivilizations = Object.values(all.civilizations).flat();






const ping = (category, inputArray) => {
    for (element of inputArray) {
        let time = new Date();
        fetch(`https://aoe2api-test.herokuapp.com/${category}/${element.toLowerCase().replace(/[ -]/g, '')}`)
        .then(response => response.json())
        .then(data => {
           // console.log(data);
           // console.log(inputArray);
            output.push(
                `${[data.uri]} pinged at [[${time.toLocaleString()}]]`
            )
            return output; 
        })
        .then(output => {
            fs.writeFileSync(`../log.js`, JSON.stringify(output, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
        })
    }}

        
    

    ping("units", inputUnits) //use two arrays with the same index categories[i] elements[i],
    

/*
for (unit of Object.values(all.units).flat()) {
    inputUnits.push(unit.toLowerCase().replace(/[ -]/g, ''));
}


for (unit of input) {
    let time = new Date();
    fetch(`https://aoe2api-test.herokuapp.com/units/${unit}`
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
*/