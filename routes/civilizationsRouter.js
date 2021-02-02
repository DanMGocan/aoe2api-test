const express = require("express");
const fs = require("fs");
const path = require("path");

/* Router for civilizations */
const civilizationsRouter = express.Router(); 

civilizationsRouter.get("/:name", async (req, res, next) => {
    try {
        const civilization = req.params.name;
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, `../data/civilizations/${civilization}.json`))); //takes specific file
        if(!civilization) {
            const err = new Error("Unit was not found!");
            err.status = 404;
            throw err;
        }
        res.send(data); //sending all data, as a JSON file instead of an element from the data file
    }

    catch(e) {
        next(e);
    }

});

module.exports = {
    civilizationsRouter
}