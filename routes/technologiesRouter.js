const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/technologies.json")); //takes all units from Data folder
const allTechnologies = JSON.parse(data);

const technologiesRouter = express.Router(); 

/* Global variables used to statistics */

technologiesRouter.use("/", (req, res, next) => {
    allTechnologiesObject.allTechnologiesTotal++;
    next();
})

technologiesRouter.use("/:name", (req, res, next) => {
    let technologyName = req.params.name.toLowerCase();
    allTechnologiesObject[technologyName]++;
    next();
})


const getTechnology = async (req, res, next) => {
    try {
        const technology = allTechnologies.find(technology => technology.name.toLowerCase() == req.params.name.toLowerCase());
        if(!technology) {
            const err = new Error("Technology was not found!");
            err.status = 404;
            throw err;
        }
        res.json(technology);
        
    }
        catch(e) {
            next(e);
        }
    }

technologiesRouter.get("/", (req, res, next) => {
    res.json(allTechnologies);
})

technologiesRouter.route("/:name").get(getTechnology); 

module.exports = {
    technologiesRouter: technologiesRouter,
    allTechnologiesObject: allTechnologiesObject
}