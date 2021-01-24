    
const all = {

    units: {
        unitsBarracks: ["Militia", "Man-at-Arms", "Long Swordsman", "Two-Handed Swordsman", "Champion", "Spearman", "Pikeman", "Halberdier",
        "Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior", "Condottiero"],
        unitsStable: ["Scout Cavalry", "Light Cavalry", "Hussar","Knight", "Cavalier", "Paladin", "Camel Rider", "Heavy Camel Rider", "Imperial Camel Rider",
        "Battle Elephant", "Elite Battle Elephant", "Steppe Lancer", "Elite Steppe Lancer"],
        unitsArcheryRange: ["Archer", "Crossbowman", "Arbalester", "Skirmisher", "Elite Skirmisher", "Imperial Skirmisher", "Cavalry Archer", "Heavy Cavalry Archer",
        "Slinger", "Genitour", "Elite Genitour"],
        unitsWorkshop: ["Battering Ram", "Capped Ram", "Siege Ram", "Mangonel", "Onager", "Siege Onager", "Scorpion", "Heavy Scorpion", "Bombard Cannon", "Siege Tower"],
        unitsCastle: ["Petard", "Trebuchet"],
        unitsUnique: ["Longbowman", "Elite Longbowman", "Cataphract", "Elite Cataphract", "Woad Raider", "Elite Woad Raider", "Chu Ko Nu", "Elite Chu Ko Nu",
        "Throwing Axeman", "Elite Throwing Axeman", "Huskarl", "Elite Huskarl", "Samurai", "Elite Samurai", "Mangudai", "Elite Mangudai", "War Elephan", "Elite War Elephant", 
        "Mameluke", "Elite Mameluke", "Teutonic Knight", "Elite Teutonic Knight", "Janissary", "Elite Janissary", "Berserk", "Elite Berserk", "Jaguar Warrior", "Elite Jaguar Warrior", 
        "Tarkan", "Elite Tarkan", "War Wagon", "Elite War Wagon", "Plumed Archer", "Elite Plumed Archer", "Conquistador", "Elite Conquistador", "Kamayuk", "Elite Kamayuk", 
        "Elephant Archer", "Elite Elephant Archer", "Genoese Crossbowman", "Elite Genoese Crossbowman", "Magyar Huszar", "Elite Magyar Huszar", "Boyar", "Elite Boyar", 
        "Camer Archer", "Elite Camel Archer", "Shotel Warrior", "Elite Shotel Warrior", "Gbeto", "Elite Gbeto", "Organ Gun", "Elite Organ Gun", "Arambai", "Elite Arambai", "Ballista Elephant",
        "Elite Ballista Elephant", "Karambit Warrior", "Elite Karambit Warrior", "Rattan Archer", "Elite Rattan Archer", "Konnik", "Elite Konnik", "Kipchak", "Elite Kipchak", "Leitis",
        "Elite Leitis", "Keshik", "Elite Keshik", "Coustillier", "Serjeant"],
        unitsTownCenter: ["Villager"],
        unitsMarket: ["Trade Cart"],
        unitsMonastery: ["Monk", "Missionary"],
        unitsDock: ["Fishing Ship", "Galley", "Galleon", "War Galley"],
        unitsPlaceholder: ["Placeholder"]
    },
    
    technologies: {
        technologiesBarracks: ["Supplies", "Arson", "Squires"],
        technologiesStable: ["Bloodlines", "Husbandry"],
        technologiesArcheryRange: ["Thumb Ring", "Parthian Tactics"],
        technologiesCastle: ["uniqueCastleAge", "uniqueImperialAge", "Hoardings", "Sappers", "Conscription", "Spies", "Treason"],
        technologiesDock: ["Gillnets", "Careening", "Dry Dock", "Shipwright"],
        technologiesSiegeWorkshop: [],
        technologiesBlacksmith: ["Padded Archer Armour", "Leather Archer Armour", "Ring Archer Armour", "Fletching", "Bodkin Arrow", "Bracer", "Forging", "Iron Casting", "Blast Furnace",
                                "Scale Barding Armour", "Chain Barding Armour", "Plate Barding Armour", "Scale Mail Armour", "Chain Mail Armour", "Plate Mail Armour"],
        technologiesUniversity: ["Masonry", "Architecture", "Fortified Wall", "Chemistry", "Bombard Tower", "Balitstics", "Siege Engineers", "Guard Tower", "Keep", "Heated Shot", "Arrowslits",
                                "Murder Holes", "Treadmil Crane"],
        technologiesMonastery: ["Faith", "Redemption", "Illumination", "Atonement", "Block Printing", "Herbal Medicine", "Theocracy", "Heresy", "Sanctity", "Fervor"],
        technologiesTownCenter: ["Town Watch", "Town Patrol", "Feudal Age", "Castle Age", "Imperial Age", "Loom", "Wheelbarrow", "Hand Cart"],
        technologiesMiningCamp: ["Gold Mining", "Gold Shaft Mining", "Stone Mining", "Stone Shaft Mining"],
        technologiesLumberCamp: ["Double-Bit Axe", "Bow Saw", "Two-Man Saw"],
        technologiesMill: ["Horse Collar", "Heavy Plow", "Crop Rotation"],
        technologiesMarket: ["Caravan", "Guilds", "Coinage", "Banking"]
    },

    buildings: {
        allBuildings: ["Barracks", "Archery Range", "Stable", "Siege Workshop", "Dock", "Castle", "Fish Trap", "Outpost", "Palisade Wall", "Palisade Gate", "Watch Tower", "Stone Wall", 
                        "Gate", "Guard Tower", "Fortified Wall", "Keep", "Bombard Tower", "Monastery", "Blacksmith", "University", "Town Center", "Mining Camp", "Lumber Camp", "Mill", 
                        "Farm", "Market", "House", "Wonder"]
                },

    civilizations: {
        civilizationsTheAgeOfKings: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings"],
        civilizationsTheConquerors: ["Aztecs", "Huns", "Koreans", "Mayans", "Spanish"],
        civilizationsTheForgotten: ["Incas", "Indians", "Italians", "Magyars", "Slavs"],
        civilizationsTheAfricanKingdoms: ["Berbers", "Ethiopians", "Malians", "Portuguese"],
        civilizaitionsRiseOfTheRajas: ["Burmese", "Khmer", "Malay", "Vietnamese"],
        civilizationsDefinitiveEdition: ["Bulgarians", "Cumans", "Lithuanians", "Tatars"],
        civilizationsLordOfTheWest: ["Burgundians", "Sicilians"]
    }
}

let categories = [...Object.keys(all)];
let inputArrays = [Object.values(all.units).flat(), Object.values(all.technologies).flat(),
    Object.values(all.buildings).flat(), Object.values(all.civilizations).flat()
    ]

    module.exports = {
        all,
        categories,
        inputArrays
    }
