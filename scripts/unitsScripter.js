/* A script to add all the units into the Units.json file,
by iterating through an array of units and using the same stats for all of them

DO NOT USE OUTSIDE DEVELOPMENT */

const fs = require("fs");

/* Arrays with all the units to be added into the JSON data */
const unitsBarracks = ["Champion", "Pikeman", "Militia", "Spearman"];
const unitsStable = ["Knight", "Scout", "Camel"];
const unitsArcheryRange = ["Archer", "Cavalry Archer"];
const unitsCastle = ["Longbowman", "Huskarl", "War Elephant"];
const unitsWorkshop = ["Scorpion", "Ram", "Onager"];

/* The pusher function to be ran individually for each array, as to 
have the possibility to add different values for the trainingTime object.
Not all units can be trained from all the buildings */
const pusher = units => {

    let trainingTimeObj = {};

    /* If conditionals to check what building to add under the Training time value*/
    if(units === unitsBarracks) { trainingTimeObj = {"barracks": 0};}
    else if (units === unitsStable) { trainingTimeObj = {"stable": 0};}
    else if (units === unitsCastle) { trainingTimeObj = {"castle": 0};}
    else if (units === unitsArcheryRange) { trainingTimeObj = {"archery range": 0};}
    else if (units === unitsWorkshop) { trainingTimeObj = {"workshop": 0};}
    else { trainingTimeObj = {"town center": 0, "monastery": 0};}

    /* Loop that reads every value in the array and creates a JSON object from it*/
    for(let i = 0; i <= units.length; i++) {

        let objectToPush = {
            "name": units[i],
            "type": " ",
            "civilization": " ", 
            "age": " ",
            "trainingTime": trainingTimeObj,
            "cost": {
                "food": 0, 
                "gold": 0,
                "wood": 0
            },
            "hitPoints": 0,
            "attackType": " ",
            "attack": 0,
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
            "unitIcon": `../resources/icons/units/${units[i]}`
        }

        stringifiedUnit = JSON.stringify(objectToPush, null, 6);
        finalString = `${stringifiedUnit}, \n\n`;
        fs.appendFile("../data/statistics/unitsTest.json", finalString, "utf8", (err) => { if(err){console.log(err)}});

    }
}

pusher(unitsWorkshop);
pusher(unitsBarracks);
pusher(unitsCastle);
pusher(unitsStable);
pusher(unitsArcheryRange);
