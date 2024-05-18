const applicationsController = require('./controllers/applicationsController')

const express = require('express');

const app = express();

// TODO: Add application-wide middleware
app.use(cors());

// TODO: Add controller(s)

app.use("/applications", applicationsController)

// TODO: Implement health check route

app.get("/", (req, res) => {
    console.log("GET Request at base URL")
    res.status(200).json({
        "data": "Service is running"
    })
})

module.exports = app;
