const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const unitsRouter = require("./routes/unitsRouter");
const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.set("port", PORT);
app.set("env", NODE_ENV);

app.use(logger("tiny"));
app.use(bodyParser.json());

app.use("/units", unitsRouter);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

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

app.listen(PORT, () => {
    console.log(`Server initiated on PORT ${app.get("port")} and ${app.get("env")} environment`);
});

