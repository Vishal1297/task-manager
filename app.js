const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")

const app = express()

setAppRoutes(app)
setMiddleware(app)


function setMiddleware(app) {
    app.use(bodyParser.json({ limit: '1mb', extended: true }))
    app.use(cookieParser())
    app.use(cors())

    /**
     * Routes
     */
    app.use("/tasks/v1", require("./app/task/routes/task.routes"));
}

function setAppRoutes(app) {
    app.get("/", (req, res) => {
        res.send({ data: "Welcome to task manager", status: 200, error: null });
    });
}

module.exports = app