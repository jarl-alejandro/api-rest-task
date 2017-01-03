'use strict'

const Task = require("./schema")

class TaskModel {

    static addTask(object) {
        const promise = new Promise(
            function resolve(resolve, reject) {
                let task = new Task()
                task.title = object.title
                task.body = object.body

                task.save((err, taskStored)=>{
                    if (err) 
                        reject(new Error({message:`No se ha podido guardar la tarea: ${err}`}))
                    resolve(taskStored)
                })                
            }
        )

        return promise 
    }

    static getAllTask() {
        const promise = new Promise(
            function resolve (resolve, reject) {
                Task.find({}).exec((err, tasksStorage) => {
                    if(err)
                        reject(new Error({message:`No se ha mostrar todas las tarea: ${err}`})) 
                    resolve(tasksStorage)
                })
            }
        )
        return promise
    }

    static getOneTask (id) {
        const promise = new Promise(function resolve (resolve, reject) {
            Task.findById(id).exec((err, tasksStorage) => {
                if(err)
                    reject(new Error({message:`No se ha mostrar la tarea: ${err}`})) 
                else resolve(tasksStorage)
            })
        })
        return promise
    }

     static putTask (id, object) {
        const promise = new Promise(function resolve (resolve, reject) {
            Task.findByIdAndUpdate(id, object).then(taskUpdated => {
                resolve(taskUpdated)
            }, err => {
                 reject(new Error({message:`No se ha podido actualizar la tarea ${err}`}))
            })
        })
        return promise
    }

    static deleteTask (id) {
        const promise = new Promise(function resolve (resolve, reject) {
            Task.findById(id).then((tasksStorage) => {
                tasksStorage.remove(err => {
                    if(err) reject(new Error({message:`Error al eliminar la tarea ${err}`}))
                    resolve({ message:"Se ha eliminado con exito" })                    
                })
            }, 
            err => {
                reject(new Error({message:`Error al eliminar la tarea ${err}`}))
            })
        })
        return promise
    }

}

module.exports = TaskModel