const fs = require("fs");
const { all } = require("../data/arrays");
const { mainScripter } = require("../helperFunctions");

const techDefaults = {
    "age": "Placeholder Age", 
    "toggle": false,
    "unique": false,
    "effect" : {
        "cost": {
            "food": 0, 
            "gold": 0,
            "wood": 0
        },
        "hitPoints": 0,
        "attack": 0,
        "range": 0,
        "attackDelay": 0.0,
        "rateOfFire": 0.0,
        "meleeArmour": 0,
        "pierceArmour": 0,
        "speed": 0, 
        "lineOfSight": 0,
    },
    "unitsAffected": ["Placeholder Placeholder Placeholder"]
};

let output = mainScripter(all.technologies, techDefaults, "researchTime", "technologies");
fs.writeFileSync(`../data/technologies.json`, JSON.stringify(output, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote units`));

