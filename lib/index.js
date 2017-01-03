'use strict'

const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const router = require("./router")

class App {

    constructor () {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors())
        this.app.use(router)
    }


}

module.exports = App