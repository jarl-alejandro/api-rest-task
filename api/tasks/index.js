'use strict'

const ModelTask = require("./model")
const Task = require("./schema")

class Tasks {

    constructor () {}

    // GET /tasks 
    get_task (req, res) {
        console.log("GET /tasks")

        ModelTask.getAllTask()
        .then(tasksStorage => {
            return res.status(201).send({tasks:tasksStorage})
        })
        .catch(err => {
            return res.status(500).send(err)                        
        })
    }

    // GET /tasks/:id
    get_task_id (req, res) {
        const id = req.params.id
        console.log("GET /tasks/:id " + id)
        
        ModelTask.getOneTask(id)
        .then(tasksStorage => {
            return res.send(tasksStorage)
        })
        .catch(err => {
            return res.status(500).send(err)                        
        })
    }

    // POST /tasks
    post_task (req, res) {
        console.log("POST /tasks")

        ModelTask.addTask(req.body)
        .then(taskPost => {
            return res.status(201).send(taskPost)
        })
        .catch(err => {
            return res.status(500).send(err)            
        })
    }

    // PUT /tasks/:id
    put_task_id (req, res) {
        const id = req.params.id        
        console.log("PUT /tasks/:id "  + id)

        ModelTask.putTask(id, req.body)
        .then(task => {
            return res.status(200).send(task)            
        })
        .catch(err => {
            return res.status(500).send(err)            
        })
    }

    // DELETE /tasks/:id
    delete_task_id (req, res) {
        const id = req.params.id            
        console.log("DELETE /tasks/:id " + id)
        ModelTask.deleteTask(id)
        .then(task => {
            return res.status(200).send(task)            
        })
        .catch(err => {
            return res.status(500).send(err)            
        })

    }
}

module.exports = Tasks
