'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title:{ type:String, require:true },
    body: String
})

TaskSchema.set('toJSON', {
  transform:(doc, ret, options)=>{
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const Task = mongoose.model("Task", TaskSchema)
module.exports = Task