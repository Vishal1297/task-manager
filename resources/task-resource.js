const express = require("express");
const taskService = require("../services/task-service")
const app = express.Router();

app.post("/task", (req, res) => {
  console.log("Save task request :", req.body);
  res.send("POST request to the homepage");
});

app.put("/task", (req, res) => {
  console.log("Update task request :", req.body);
  res.send("PUT request to the homepage");
});

app.delete("/task", (req, res) => {
  console.log("Delete task request :", req.body);
  res.send("DELETE request to the homepage");
});

app.get("/tasks", (req, res) => {
  console.log("Get all tasks request :", req.body);
  res.send("GET request to the homepage");
});

module.exports = app;
