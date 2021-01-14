/*************************************************************************************
Age of Empires 2 Wiki API                                                            *
                                                                                     *
Made by Dan M. Gocan, 2021                                                           *
Contains information about Units, Buildings, Technlogies and Civilizations. For      *
how to use, please see the README.md file. Hosted for free through Heroku, many      *
thanks for that. And many thanks to Microsoft for keeping the franchise strong       *
                                                                                     *
Dedicated to my wife, a huge fan of the game :)                                      *
*************************************************************************************/

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const fs = require("fs");
const app = express();
const { statisticsIncrementor } = require("./helperFunctions");
const { testFunction } = require("./helperFunctions");

const homeRouter = express.Router();
app.use("/", homeRouter);


/* Serving the favicon, yes I know :) */
const favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, '/favicon.ico')));

/** Importing the necessary statistics .json files */
const civilizationsStatisticsJSON = fs.readFileSync(path.join(__dirname, "./data/statistics/statistics.json"));
const civilizationsStatistics = JSON.parse(civilizationsStatisticsJSON);

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(logger("tiny"));
app.use(bodyParser.json()); //Not necessary, left here anyway for future use

/* Importing the Units Router module, together with the statical data of all times the units have been accessed */
const unitsRouterModule = require("./routes/unitsRouter");
const unitsRouter = unitsRouterModule.unitsRouter;

/* Importing the Technologies Router module, together with the statistical data of all times the technologies have been accessed */
const technologiesRouterModule = require("./routes/technologiesRouter");
const technologiesRouter = technologiesRouterModule.technologiesRouter;

/* Importing the Civilizations Router module, together with the statistical data of all times the civilizations have been accessed */
const civilizationsRouterModule = require("./routes/civilizationsRouter");
const civilizationsRouter = civilizationsRouterModule.civilizationsRouter;

/* Routers */
app.use("/units", unitsRouter);
app.use("/technologies", technologiesRouter);
app.use("/civilizations", civilizationsRouter);

/* Statistics incrementor, on each app use */
homeRouter.use("/:category/:name", statisticsIncrementor);

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
    <p>Civilization Aztecs requested: ${civilizationsStatistics.aztecs}}</p>
    <p>Civilization Aztecs requested: ${civilizationsStatistics.britons}}</p>`
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

