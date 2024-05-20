const express = require('express')

const applications = express.Router();

const { 
    getAllApplications, 
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication
 } = require("../queries/jobApplicationsQueries");
const app = require('../app');

applications.get("/", (request, response) => {

    try{
        let applications = getAllApplications()
        response.status(200).json({
            data: applications
        })
    }catch(err){
        response.status(404).json({
            error: err
        })
    }
})

applications.get("/:id", (req, res) => {
    let { id } = req.params

    if(!Number.isInteger(id)){
        res.status(415).json({
            errror: "Unsupported media type."
        })
    }

    try{
        let application = getApplicationById(id)
        res.status(200).json({
            data: application
        })
    }catch(err){
        res.status(404).json({
            error: err
        })
    }

})

applications.post("/", (req, res) => {
 try {
    let application = createApplication(req.body)
    res.status(201).json({
        data: application
    })

 } catch (err){
    res.status(500).json({
        error: err
    })
 }
})

applications.put('/:id', (req, res) => {
    let { id } = req.params;
    try {
        let application = updateApplication(id, req.body)
        res.status(200).json({
            data: application
        })
    } catch(err){
        res.status(404).json({
            error: err
        })
    }
    })

applications.delete("/:id", (req, res) => {
    let { id } = req.params
    try{
        let application = deleteApplication(id)
        res.status(200).json({
            data: application
        })
    }catch(err){
        res.status(404).json({
            error: err
        })
    }
})

module.exports =  applications 