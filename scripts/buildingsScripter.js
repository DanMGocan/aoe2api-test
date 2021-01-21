const fs = require("fs");
const { all } = require("../data/arrays");
const { mainScripter } = require("../helperFunctions");

const buildingsDefaults = {
    "age": "Placeholder",
    "cost": {
        "stone": 0, 
        "gold": 0,
        "wood": 0
    },
    "hitPoints": 0,
    "canAttack": false,
    "attack": 0,
    "range": 0,
    "attackDelay": 0.0,
    "rateOfFire": 0.0,
    "meleeArmour": 0,
    "pierceArmour": 0,
    "armourClass": ["Type1", "Type2", "Type3"],
    "lineOfSight": 0,
    "unique": false
};

let output = mainScripter(all.buildings, buildingsDefaults, "constructionTime");
fs.writeFileSync(`../data/buildings.json`, JSON.stringify(output, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote units`));

