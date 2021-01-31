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
const statistics = require("./data/statistics/statistics.json")
const { statisticsIncrementor } = require("./helperFunctions");

/* Added as a helper for the statisticsIncrementor listener */
const homeRouter = express.Router();
app.use("/", homeRouter);
homeRouter.use("/:category/:name", statisticsIncrementor);

/* Serving the favicon, yes I know :) */
const favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, '/favicon.ico')));

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(logger("tiny"));
app.use(bodyParser.json()); //Not necessary, left here anyway for future use

/* Importing the Units Router module, together with the statical data of all times the units have been accessed */
const { unitsRouter } = require("./routes/unitsRouter");

/* Importing the Technologies Router module, together with the statistical data of all times the technologies have been accessed */
const technologiesRouterModule = require("./routes/technologiesRouter");
const technologiesRouter = technologiesRouterModule.technologiesRouter;

/* Importing the Civilizations Router module, together with the statistical data of all times the civilizations have been accessed */
const civilizationsRouterModule = require("./routes/civilizationsRouter");
const civilizationsRouter = civilizationsRouterModule.civilizationsRouter;

/* Importing the Buildings Router module */
const buildingsRouterModule = require("./routes/buildingsRouter");
const buildingsRouter = buildingsRouterModule.buildingsRouter;

/* Routers */
app.use("/units", unitsRouter);
app.use("/technologies", technologiesRouter);
app.use("/civilizations", civilizationsRouter);
app.use("/buildings", buildingsRouter);

/* Allowing cross origin */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* Formatting the JSON responses */
app.set('json spaces', '\t');

/********** Initial index.html file, sent as Homepage */
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
/********** Initial index.html file, sent as Homepage */
app.get("/civilizations", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/public/allcivilizations.html"));
})

app.get("/stats", (req, res, next) => {
    res.json(statistics);
});

app.get("/log", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/logs/log.html"));
})

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

