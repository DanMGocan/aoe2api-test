/*

Age of Empires 2 API
Made by Dan Gocan, 2021
Contains all information about Units, Buildings, Technlogies and Civilizations

*/

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
/*
app.set("port", PORT);
app.set("env", NODE_ENV);
*/

app.use(logger("tiny"));
app.use(bodyParser.json()); //Not necessary, left here anyway for future use

/* Importing the Units Router module, together with the statical data of all times the units have been accessed */
const unitsRouterModule = require("./routes/unitsRouter");
const unitsRouter = unitsRouterModule.unitsRouter;
let allUnitsObject = unitsRouterModule.allUnitsObject;

/* Importing the Technologies Router module, together with the statistical data of all times the technologies have been accessed */
const technologiesRouterModule = require("./routes/technologiesRouter");
const technologiesRouter = technologiesRouterModule.technologiesRouter;
let allTechnologiesObject = technologiesRouterModule.allTechnologiesObject;

/* Routers */
app.use("/units", unitsRouter);
app.use("/technologies", technologiesRouter);

/* Allowing cross origin */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* Initial index.html file, sent as Homepage */
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/stats", (req, res, next) => {
    res.send(`
    <p>All units have been requested ${allUnitsObject.allUnitsTotal} times.</p>
    <br>
    <p>Unit Huskarl: <strong>${allUnitsObject.huskarl} times</strong></p>
    <p>Unit Longbowman: <strong>${allUnitsObject.longbowman} times</strong></p>
    <p>All techs: <strong>${allTechnologiesObject.allTechnologiesTotal} times</strong></p>
    <p>Unit Longbowman: <strong>${allTechnologiesObject.fletching} times</strong></p>`
    )
});

/* Error handlers*/
app.use((req, res, next) => {
    const err = new Error(`${req.method}${req.url} was not found!`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        },
    });
});

/* App initialization */
app.listen(PORT, () => {
    console.log(`Server initiated on PORT ${PORT} and ${NODE_ENV} environment`);
});

