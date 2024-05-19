const express = require('express')

const applications = express.Router();

const { 
    getAllApplications, 
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication
 } = require("../queries/jobApplicationsQueries")

applications.get("/", (request, response) => {

    try{
        let applications = getAllApplications()
        response.status(200).json({
            data : applications
        })
    }catch(err){
        response.status(404).json({
            error: error
        })
    }
})

applications.get("/:id", (req, res) => {
    let { id } = req.params

    try{}catch(err){}
    let application = getApplicationById(id)

})

applications.post("/", (req, res) => {

})

applications.put('/:id', (req, res) => {

})

applications.delete("/:id", (req, res) => {

})

module.exports =  applications 