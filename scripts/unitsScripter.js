const fs = require("fs");
const { all } = require("../data/arrays");
const { mainScripter } = require("../helperFunctions");

const unitDefaults = {
    "type": "Placeholder",
    "civilization": "Placeholder", 
    "age": "Placeholder",
    "cost": {
        "food": 0, 
        "gold": 0,
        "wood": 0
    },
    "hitPoints": 0,
    "attackType": "placeholder",
    "attack": 0,
    "range": 0,
    "attackBonus": {
        "Unit1": 0,
        "Unit2": 0,
        "Unit3": 0,
        "Unit4": 0,
        "Unit5": 0,
        "Unit6": 0
    },
    "attackDelay": 0.0,
    "rateOfFire": 0.0,
    "meleeArmour": 0,
    "pierceArmour": 0,
    "armourClass": ["Type1", "Type2", "Type3"],
    "speed": 0, 
    "lineOfSight": 0,
    "unique": false
};

let output = mainScripter(all.units, unitDefaults, "trainingTime", "units");
fs.writeFileSync(`../data/units.json`, JSON.stringify(output, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote units`));

