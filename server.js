require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

/**
 * DB connection
 */

const db = require("./app/models/mongoose");

const initDB = require("./app/models/init");

initDB.init(db);

app.get("/", (req, res) => {
  res.send({ data: "Welcome to task manager", status: 200, error: null });
});

app.use("/tasks/v1", require("./app/controllers/task.controller.js")(app));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening at port:", PORT);
});
