require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

/**
 * DB connection
 */

const db = require("./app/models/mongoose");

const initDB = require("./app/models/init");

initDB.init(db);

app.get("/", (req, res) => {
  res.send({ data: "Welcome to task manager", status: 200, error: null });
});

/**
 * Middlewares
 */

const taskRoutes = require("./app/routes/task.routes");

app.use("/tasks/v1", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening at port:", PORT);
});
