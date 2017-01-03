'use strict'

const http = require("http")
const App = require("./lib")
const mongoose = require("mongoose")

const port = process.env.PORT || 5000
const server = http.createServer()
const api = new App()
const db = "mongodb://jarl:jarl@ds119768.mlab.com:19768/tareasquehacer"

mongoose.connect(db, onListenDB)
mongoose.Promise = Promise

server.on("request", api.app)

server.on("listening", () => {
    console.log(`Server running in http://localhost:${port}`)
})

server.listen(port)

function onListenDB (err) {
    if(err) throw(`No se puede conectar a mongodb => ${err}`);
    else console.log("Se ha conectado con exito.")
}