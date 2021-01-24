/* Ping all units and write the results in a log */
const {
    all
} = require("../data/arrays");
const fs = require("fs");
const fetch = require("node-fetch");

let categories = [...Object.keys(all)];
let inputArrays = [Object.values(all.units).flat(), Object.values(all.technologies).flat(),
    Object.values(all.buildings).flat(), Object.values(all.civilizations).flat()
]

/*
async function createArray() {
    for (let i = 0; i <= categories.length; i++) { //what even is this? :-/
        for (let j = 0; j <= inputArrays[0].length; j++) {
            pathsToCheck.push(`${categories[i]}/${inputArrays[0][j]}`.toLowerCase().replace(/[ -]/g, ''))
        }
    }
    return pathsToCheck;
}
*/
/*
async function createPaths() {
    let output = [];

    let allPaths = new Promise((resolve, reject) => {

        let pathsToCheck = [];
        for (let i = 0; i < categories.length; i++) {
            for (element of inputArrays[i]) {
                pathsToCheck.push(`${categories[i]}/${element}`.toLowerCase().replace(/[ -]/g, ''))
            } 
        }

        fs.writeFile(`../paths.js`, JSON.stringify(pathsToCheck, null, 6), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 

        Promise.resolve(pathsToCheck).then(function(pathsToCheck) {

            for (element in pathsToCheck) {
                let time = new Date();
                //console.log(pathsToCheck[element]);
                fetch(`https://aoe2api-test.herokuapp.com/${pathsToCheck[element]}`)
                .then(response => response.json())
                .then(data => {
                let toWrite = `${[data.uri]} pinged at [[${time.toLocaleString()}]]\n`
                output.push(toWrite);
                console.log(output);
                return output;
            })
        }
        })
        .then(output => {
            fs.writeFileSync(`../log.js`, JSON.stringify(output, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 

        });
    })    
}

createPaths()
*/
let output = [];

const arrayPromise = new Promise((resolve, reject) => {
    let pathsToCheck = [];
    for (let i = 0; i < categories.length; i++) {
        for (element of inputArrays[i]) {
                pathsToCheck.push(`${categories[i]}/${element}`.toLowerCase().replace(/[ -]/g, ''))
        }
    }
    fs.writeFileSync(`../paths.js`, JSON.stringify(pathsToCheck, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
    resolve(pathsToCheck);
}) 
    


arrayPromise.then(async function(result) {

    for (element of result) {
        let time = new Date();
        let response = await fetch(`https://aoe2api-test.herokuapp.com/${element}`);
        let json = await response.json(); 
        if (json.name) {
            let toWrite = {
                unitName: [json.name],
                pingedAt: element,
                time: time.toLocaleString()
            }
            output.push(toWrite);
        } else {
            output.push(`[[[[[[[Nothing was found at ${element}]]]]]]]`)
        }
    }
    fs.writeFileSync(`../log.js`, JSON.stringify(output, null, 6), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 


})







        /*
            .then(response => response.json())
            .then(data => {
                if (data.name === undefined) {
                    return `[[[ ELEMENT WAS NOT FOUND! ]]]`
                } else {
                    return `${data.name} has been successfully pinged!`    
                }
            })
            .then(result => {
                output.push(result);
                return output;
        })
            .then(output => {
                fs.writeFileSync(`../log.js`, JSON.stringify(output, null, 10), err => err ? console.error("Unit cannot be reached!") : console.log(`${output.name} successfully pinged!`)) 
            })
        }
    })*/




