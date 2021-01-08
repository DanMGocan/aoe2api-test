const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/units.json"));

const unitsRouter = express.Router();

const getUnit = async (req, res, next) => {
    try {
        const allUnits = JSON.parse(data);
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
        res.json(JSON.parse(data));
    })

    unitsRouter.route("/:name").get(getUnit); 
    module.exports = unitsRouter;