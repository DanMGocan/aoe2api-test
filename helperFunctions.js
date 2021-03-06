/* A function that takes the unit / civilization / technology or building parameters and when called, adds it to the statistics JSON document */
const fs = require("fs");
const stats = require("./data/statistics/statistics.json");
let statisticsContent = Object.keys(stats.civilizations).concat(Object.keys(stats.units), Object.keys(stats.buildings), Object.keys(stats.technologies));

const statisticsIncrementor = (req, res, next) => {
    let category = req.params.category.toLowerCase();
    let name = req.params.name.toLowerCase();
        if(statisticsContent.includes(name)) {
            stats[category.toLowerCase()][name.toLowerCase()]++;
            jsonStats = JSON.stringify(stats, null, 10);
            fs.writeFile("./data/statistics/statistics.json", jsonStats, "utf8", (err) => { if(err){console.log(err)}});
            next();
        } //else {
          //  let err = new Error("Invalid request");
           // next(err);
        //}  
    }


/** Main scripter for Units, Techs and Buildings */
const mainScripter = (data, defaults, time, type) => {
    let output = [];
    for(const [catName, objNames] of Object.entries(data)){
        for(const name of objNames){
            let uri = name.toLowerCase().replace(/[ -]/g, '');
            output.push({
                name,
                uri: uri,
                ...defaults,
                [time]: {[catName]: 0},
                icon: `../resources/icons/${type}/${name.toLowerCase().replace(/[ -]/g, '')}.png`,
            });
        }
    }
    return output;
}

module.exports = {
    statisticsIncrementor,
    mainScripter
}