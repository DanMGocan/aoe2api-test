const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/units.json")); //takes all units from Data folder
const allUnits = JSON.parse(data);

const unitsRouter = express.Router(); 


/* Object used for statistical purpose */
let allUnitsObject = {
    allUnitsTotal: 0,
    huskarl: 0,
    longbowman: 0
}

unitsRouter.use("/", (req, res, next) => {
    allUnitsObject.allUnitsTotal++;
    next();
})

unitsRouter.use("/:name", (req, res, next) => {
    let unitName = req.params.name.toLowerCase();
    allUnitsObject[unitName]++;
    next();
})


const getUnit = async (req, res, next) => {
    try {
        const unit = allUnits.find(unit => unit.name.toLowerCase() == req.params.name.toLowerCase());
        if(!unit) {
            const err = new Error("Unit was not found!");
            err.status = 404;
            throw err;
        }
        res.json(unit);
        
    }
        catch(e) {
            next(e);
        }
    }

unitsRouter.get("/", (req, res, next) => {
    res.json(allUnits);
})

unitsRouter.route("/:name").get(getUnit); 

module.exports = {
    unitsRouter: unitsRouter,
    allUnitsObject: allUnitsObject
}