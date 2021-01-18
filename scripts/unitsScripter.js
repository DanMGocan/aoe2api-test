const fs = require("fs");
const uniqueUnits = ["Longbowman", "Elite Longbowman", "Cataphract", "Elite Cataphract", "Woad Raider", "Elite Woad Raider", "Chu Ko Nu", "Elite Chu Ko Nu",
"Throwing Axeman", "Elite Throwing Axeman", "Huskarl", "Elite Huskarl", "Samurai", "Elite Samurai", "Mangudai", "Elite Mangudai", "War Elephan", "Elite War Elephant", 
"Mameluke", "Elite Mameluke", "Teutonic Knight", "Elite Teutonic Knight", "Janissary", "Elite Janissary", "Berserk", "Elite Berserk", "Jaguar Warrior", "Elite Jaguar Warrior", 
"Tarkan", "Elite Tarkan", "War Wagon", "Elite War Wagon", "Plumed Archer", "Elite Plumed Archer", "Conquistador", "Elite Conquistador", "Kamayuk", "Elite Kamayuk", 
"Elephant Archer", "Elite Elephant Archer", "Genoese Crossbowman", "Elite Genoese Crossbowman", "Magyar Huszar", "Elite Magyar Huszar", "Boyar", "Elite Boyar", 
"Camer Archer", "Elite Camel Archer", "Shotel Warrior", "Elite Shotel Warrior", "Gbeto", "Elite Gbeto", "Organ Gun", "Elite Organ Gun", "Arambai", "Elite Arambai", "Ballista Elephant",
"Elite Ballista Elephant", "Karambit Warrior", "Elite Karambit Warrior", "Rattan Archer", "Elite Rattan Archer", "Konnik", "Elite Konnik", "Kipchak", "Elite Kipchak", "Leitis",
"Elite Leitis", "Keshik", "Elite Keshik", "Coustillier", "Serjeant"];

const allUnits = {
    barracks: ["Militia", "Man-at-Arms", "Long Swordsman", "Two-Handed Swordsman", "Champion", "Spearman", "Pikeman", "Halberdier",
"Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior", "Condottiero"],
    stable: ["Scout Cavalry", "Light Cavalry", "Hussar","Knight", "Cavalier", "Paladin", "Camel Rider", "Heavy Camel Rider", "Imperial Camel Rider",
"Battle Elephant", "Elite Battle Elephant", "Steppe Lancer", "Elite Steppe Lancer"],
    archeryRange: ["Archer", "Crossbowman", "Arbalester", "Skirmisher", "Elite Skirmisher", "Imperial Skirmisher", "Cavalry Archer", "Heavy Cavalry Archer",
"Slinger", "Genitour", "Elite Genitour"],
    castle: ["Petard", "Trebuchet", ...uniqueUnits],
    workshop: ["Battering Ram", "Capped Ram", "Siege Ram", "Mangonel", "Onager", "Siege Onager", "Scorpion", "Heavy Scorpion", "Bombard Cannon", "Siege Tower"],
    monastery: ["Monk", "Missionary"],
    townCenter: ["Villager"],
    market: ["Trade Cart"],
    dock: ["Fishing Ship", "Galley", "Galleon", "War Galley"],
    krepost: ["Konnik", "Elite Konnik"]
};

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

const output = [];

for(const [areaName, unitNames] of Object.entries(allUnits)){
    for(const name of unitNames){
        output.push({
            name,
            ...unitDefaults,
            trainingTime: {[areaName]: 0},
            unitIcon: `../resources/icons/units/${name.split(" ").join("").toLowerCase()}`,
        });
    }
}

fs.writeFileSync(`../data/units.json`, JSON.stringify(output, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote units`));

module.exports = {
    allUnits
}
