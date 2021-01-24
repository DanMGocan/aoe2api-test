const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/buildings.json")); //takes all units from Data folder
const allBuildings = JSON.parse(data);

const buildingsRouter = express.Router(); 

buildingsRouter.get("/", (req, res, next) => {
    res.json(allBuildings);
});

buildingsRouter.get("/:name", (req, res, next) => {
    try {
        const building = allUnits.find(unit => unit.uri == req.params.name)
        if(!building) {
            const err = new Error("Building was not found!");
            err.status = 404;
            throw err;
        }
        res.json(building);
        
    }
        catch(e) {
            next(e);
        }
})

module.exports = {
    buildingsRouter
}