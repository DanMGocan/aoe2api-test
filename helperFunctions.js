/* A function that takes the unit / civilization / technology or building parameters and when called, adds it to the statistics JSON document */
const fs = require("fs");
const stats = require("./data/statistics/statistics.json");
let statisticsContent = Object.keys(stats.civilizations).concat(Object.keys(stats.units), Object.keys(stats.buildings), Object.keys(stats.technologies));

let statisticsIncrementor = (req, res, next) => {
    let category = req.params.category.toLowerCase();
    let name = req.params.name.toLowerCase();
    if(statisticsContent.includes(name)) {
        stats[category.toLowerCase()][name.toLowerCase()]++;
        jsonStats = JSON.stringify(stats, null, 10);
        fs.writeFile("./data/statistics/statistics.json", jsonStats, "utf8", (err) => { if(err){console.log(err)}});
        next();
    } else {
        let err = new Error("Invalid request");
        next(err);
    }  
}

module.exports = {
    statisticsIncrementor
}