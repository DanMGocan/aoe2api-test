const express = require("express");
const fs = require("fs");
const path = require("path");
const statistics = require("../data/statisticsObjects.js");

/* Router for civilizations */
const civilizationsRouter = express.Router(); 

/* Object used for statistical purpose */
let allCivilizationsObject = statistics.allCivilizationsObject;

civilizationsRouter.use("/:name", (req, res, next) => {
    console.log(allCivilizationsObject);
    let civilizationName = req.params.name.toLowerCase();
    allCivilizationsObject[civilizationName]++;
    next();
})

const getCivilization = async (req, res, next) => {
    try {
        const civilizationName = req.params.name;
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, `../data/civilizations/${civilizationName}.json`))); //takes specific file
        if(!civilizationName) {
            const err = new Error("Unit was not found!");
            err.status = 404;
            throw err;
        }
        res.json(data);    
    }
        catch(e) {
            next(e);
        }
    }

civilizationsRouter.route("/:name").get(getCivilization); 

module.exports = {
    civilizationsRouter: civilizationsRouter,
    allCivilizationsObject: allCivilizationsObject
}