const fs = require("fs");
const { all } = require("../data/arrays");
const civilizations = Object.values(all.civilizations).flat().map(element => element.toLowerCase().replace(/[ -]/g, ''));

const civDefaults = {
        "icon": "https://www.forgottenempires.net/wp-content/uploads/menu_techtree_aztecs.png",
        "arhitecture": "Native American", 
        "focus": ["Infantry", "Monks"],
        "wikiPage": "https://ageofempires.fandom.com/wiki/Aztecs_(Age_of_Empires_II)",
        "forgottenEmpiresLink": "https://www.forgottenempires.net/age-of-empires-ii-definitive-edition/civilizations/aztecs",
        "expansion": "Age of Kings",
        "buildings": {
            "barracks": true,
            "archery range": true,
            "stable": false,
            "siege workshop": true,
            "castle": true,
            "dock": true,
            "outpost": true,
            "watch tower": true,
            "guard tower": true, 
            "keep": false,
            "palisade wall": true,
            "stone wall": true, 
            "fortified wall": true, 
            "bombard tower": false,
            "palisade gate": true, 
            "gate": true,
            "monastery": true,
            "blacksmith": true,
            "university": true,
            "town center": true,
            "mining camp": true,
            "lumber camp": true,
            "mill": true,
            "farm": true,
            "market": true,
            "house": true,
            "wonder": true
        },

        "units": {
            "Militia": true,
            "Man-at-Arms": true,
            "Long Swordsman": true,
            "Two-Handed Swordsman": true,
            "Champion": true,
            "Spearman": true,
            "Pikeman": true,
            "Halberdier": false,
            "Eagle Scout": true, 
            "Eagle Warrior": true,
            "Elite Eagle Warrior": true,
            "Archer": true,
            "Crossbowman": true,
            "Arbalester": true,
            "Skirmisher": true,
            "Elite Skirmisher": true,
            "Hand Cannoneer": false,
            "Cavalry Archer": false,
            "Heavy Cavalry Archer": false,
            "Scout Cavalry": false,
            "Light Cavalry": false,
            "Hussar": false,
            "Knight": false,
            "Cavalier": false,
            "Paladin": false,
            "Camel Rider": false,
            "Heavy Camel Rider": false,
            "Battle Elephant": false, 
            "Elite Battle Elephant": false,
            "Steppe Lancer": false,
            "Elite Steppe Lancer": false,
            "Battering Ram": true,
            "Capped Ram": true,
            "Siege Ram": true,
            "Mangonel": true,
            "Onager": true,
            "Siege Onager": true,
            "Scorpion": true,
            "Heavy Scorpion": false,
            "Siege Tower": true,
            "Bombard Cannon": false,
            "Petard": true,
            "Trebuchet": true,
            "Fishing Ship": true,
            "Fire Galley": true,
            "Fire Ship": true,
            "Fast Fire Ship": true,
            "Transport Ship": true, 
            "Trade Cog": true, 
            "Cannon Galleon": false, 
            "Elite Cannon Galleon": false,
            "Demolition Raft": true, 
            "Demolition Ship": true,
            "Heavy Demolition Ship": false,
            "Galley": true,
            "War Galley": true,
            "Galleon": false,
            "Monk": true,
            "Villager": true,
            "Trade Cart": true
        },

        "uniqueUnits": {
            "Jaguar Warrior": true,
            "Elite Jaguar Warrior": true
        },

        "technologies": {
            "Atlatl": true, 
            "Garland Wars": true,
            "Supplies": true,
            "Squires": true,
            "Arson": true,
            "Thumb Ring": false,
            "Parthian Tactics": false,
            "Bloodlines": false,
            "Husbandry": false,
            "Hoardings": false,
            "Sappers": true,
            "Conscription": true,
            "Spies/Treason": true,
            "Gillnets": true,
            "Careening": true,
            "Dry Dock": true,
            "Shipwright": true,
            "Faith": true,
            "Redemption": true,
            "Illumination": true,
            "Atonement": true,
            "Block Printing": true,
            "Herbal Medicine": true,
            "Theocracy": true,
            "Heresy": true,
            "Sanctity": true,
            "Fervor": true,
            "Padded Archer Armor": true,
            "Leather Archer Armor": true,
            "Ring Archer Armor": false,
            "Fletching": true,
            "Bodkin Arrow": true,
            "Bracer": true,
            "Forging": true,
            "Iron Casting": true,
            "Blast Furnace": true,
            "Scale Barding Armor": false,
            "Chain Barding Armor": false,
            "Plate Barding Armor": false,
            "Scale Mail Armor": true,
            "Chain Mail Armor": true,
            "Plate Mail Armor": true,
            "Masonry": false,
            "Architecture": false,
            "Fortified Wall": true,
            "Chemistry": true,
            "Bombard Tower": false,
            "Ballistics": true,
            "Siege Engineers": true,
            "Guard Tower": true,
            "Keep": false,
            "Heated Shot": true,
            "Arrowslits": true,
            "Murder Holes": true,
            "Treadmil Crane": true,
            "Town Watch": true,
            "Town Patrol": true,
            "Feudal Age": true,
            "Castle Age": true,
            "Imperial Age": true,
            "Loom": true,
            "Wheelbarrow": true,
            "Hand Cart": true,
            "Gold Mining": true,
            "Gold Shaft Mining": true,
            "Stone Mining": true,
            "Stone Shaft Mining": true,
            "Double-Bit Axe": true,
            "Bow Saw": true,
            "Two-Man Saw": false,
            "Horse Collar": true,
            "Heavy Plow": true,
            "Crop Rotation": true,
            "Coinage": true,
            "Banking": true,
            "Caravan": true,
            "Guilds": true 
        }   
    }

for (element of civilizations) {
    let object = {
        name: element,
        uri: element.toLowerCase().replace(/[ -]/g, ''), 
        ...civDefaults
    }
    fs.writeFile(`../data/civilizations/${element}.json`, JSON.stringify(object, null, 6), err => err ? console.error(err) : console.log(`Successfully wrote civilization`));
}
