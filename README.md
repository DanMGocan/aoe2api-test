# To add: #
* download all DB option
* a download parameters so you can download JSON files
* validate requests for civ, units, tech and buildings
* helper function to create individual objects from JSON
* add a download DB option
* replace main routes with helper function

* add a function that reads the parametres on the routes
and if they return as TRUE, process all the data and return the object
/?values=attack,defend&counter=true
* create a tester script, which pings all routes and writes the
result in a log


* add expansion key / value to the civilizations 
* add URI values for all entries
* fix icon url for all entries 
* toggle all techs as false

Sources of information: 


### Unit format

        "name" : " ",
        "type" : ",
        "civilization" : ", 
        "age" : "",
        "trainingTime": {
            "Castle" : ,
            "Stable" : ,
            "Barracks": ,
            "Archery range": ,
        },
        "cost" : {
            "Food" : , 
            "Fold" : ,
            "Food" : 
        },
        "hitPoints" : ,
        "attackType" : "",
        "attack" : ,
        "attackBonus": {
            "Stone defense" : ,
            "Castle" : ,
            "Building" : ,
            "Wall and gate" : 
        },
        "attackDelay" : ,
        "rateOfFire" : ,
        "meleeArmour" : ,
        "pierceArmour": ,
        "armourClass" : ["Cavalry", "Unique unit"],
        "speed" : 1.35, 
        "lineOfSight" : 5,
        "unitIcon" : ""


### Civilizations format

        "name": "CivName", 
        "icon": "./resources/icons/civilizations/CivIcon-Name.png",
        "arhitecture": "Civ Arch", 
        "focus": ["Infantry", "Monks"],
        "wikiPage": "",
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
            "bombard tower": true,
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
            "Halberdier": true,
            "Eagle Scout": true, 
            "Eagle Warrior": true,
            "Elite Eagle Warrior": true,
            "Archer": true,
            "Crossbowman": true,
            "Arbalester": true,
            "Skirmisher": true,
            "Elite Skirmisher": true,
            "Hand Cannoneer": true,
            "Cavalry Archer": true,
            "Heavy Cavalry Archer": true,
            "Scout Cavalry": true,
            "Light Cavalry": true,
            "Hussar": true,
            "Knight": true,
            "Cavalier": true,
            "Paladin": true,
            "Camel Rider": true,
            "Heavy Camel Rider": true,
            "Battle Elephant": true, 
            "Elite Battle Elephant": true,
            "Steppe Lancer": true,
            "Elite Steppe Lancer": true,
            "Battering Ram": true,
            "Capped Ram": true,
            "Siege Ram": true,
            "Mangonel": true,
            "Onager": true,
            "Siege Onager": true,
            "Scorpion": true,
            "Heavy Scorpion": false,
            "Siege Tower": true,
            "Bombard Cannon": true,
            "Petard": true,
            "Trebuchet": true,
            "Fishing Ship": true,
            "Fire Galley": true,
            "Fire Ship": true,
            "Fast Fire Ship": true,
            "Transport Ship": true, 
            "Trade Cog": true, 
            "Cannon Galleon": true, 
            "Elite Cannon Galleon": true,
            "Demolition Raft": true, 
            "Demolition Ship": true,
            "Heavy Demolition Ship": true,
            "Galley": true,
            "War Galley": true,
            "Galleon": true,
            "Monk": true,
            "Villager": true,
            "Trade Cart": true
        },

        "uniqueUnits": {
            "Unit1": true,
            "Unit2": true
        },

        "technologies": {
            "Atlatl": true, 
            "Garland Wars": true,
            "Supplies": true,
            "Squires": true,
            "Arson": true,
            "Thumb Ring": true,
            "Parthian Tactics": true,
            "Bloodlines": true,
            "Husbandry": true,
            "Hoardings": true,
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
            "Ring Archer Armor": true,
            "Fletching": true,
            "Bodkin Arrow": true,
            "Bracer": true,
            "Forging": true,
            "Iron Casting": true,
            "Blast Furnace": true,
            "Scale Barding Armor": true,
            "Chain Barding Armor": true,
            "Plate Barding Armor": true,
            "Scale Mail Armor": true,
            "Chain Mail Armor": true,
            "Plate Mail Armor": true,
            "Masonry": true,
            "Architecture": true,
            "Fortified Wall": true,
            "Chemistry": true,
            "Bombard Tower": true,
            "Ballistics": true,
            "Siege Engineers": true,
            "Guard Tower": true,
            "Keep": true,
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
            "Two-Man Saw": true,
            "Horse Collar": true,
            "Heavy Plow": true,
            "Crop Rotation": true,
            "Coinage": true,
            "Banking": true,
            "Caravan": true,
            "Guilds": true 
