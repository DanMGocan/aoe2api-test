const express = require("express");
const fs = require("fs");
const path = require("path");

/* Router for civilizations */
const civilizationsRouter = express.Router(); 

civilizationsRouter.get("/:name", async (req, res, next) => {
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

});

module.exports = {
    civilizationsRouter: civilizationsRouter
}