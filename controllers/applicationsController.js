const express = require("express")

const applications = express.Router()

applications.get("/", (request, response) => {
    response.status(200).json({
        
    })
})

export default { applications }