const express = require("express");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "../data/technologies.json")); //takes all technologies from Data folder
const allTechnologies = JSON.parse(data);

const technologiesRouter = express.Router(); 

technologiesRouter.get("/:name", async (req, res, next) => {
    const techToSearch = req.params.name;
    try {
        const technology = allTechnologies.find(technology => technology.name == techToSearch);
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
})

technologiesRouter.get("/", (req, res, next) => {
    res.json(allTechnologies);
})

module.exports = {
    technologiesRouter
}