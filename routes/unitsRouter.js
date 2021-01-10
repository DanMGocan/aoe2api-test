const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/units.json")); //takes all units from Data folder
const allUnits = JSON.parse(data);

/* Global variables used to statistics */
let allUnitsTimesRequested = 0;

let allUnitsObject = {
    huskarl: 0,
    longbowman: 0
}

const unitsRouter = express.Router(); 

const getUnit = async (req, res, next) => {
    try {
        const unit = allUnits.find(unit => unit.name.toLowerCase() == req.params.name.toLowerCase());
        if(!unit) {
            const err = new Error("Unit was not found!");
            err.status = 404;
            throw err;
        }
        allUnitsObject[unit]++;
        res.json(unit);
        
    }
        catch(e) {
            next(e);
        }
    }

unitsRouter.get("/", (req, res, next) => {
    allUnitsTimesRequested++;
    res.json(allUnits);
})

unitsRouter.route("/:name").get(getUnit); 
module.exports = unitsRouter;
module.exports = allUnitsObject;
module.exports = allUnitsTimesRequested;