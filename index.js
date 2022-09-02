require("dotenv").config();
const express = require('express')
const app = express()
const taskResource = require('./resources/task-resource')
const DEFAULT_PORT = 3000


app.use("/tasks/v1", taskResource);

app.listen(process.env.PORT, () => {
    console.log("Server is listening at port ", process.env.PORT || DEFAULT_PORT);
})