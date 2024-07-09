const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { API_VERSION } = require("./constans")

const app = express()

// Importar rutas
const authRoutes = require("./router/auth.router")

// Configurar body Parse
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// configurar carpetas estatic
app.use(express.static("uploads"))

// configurar header HTTP - CORS
app.use(cors())

// configurar rutas
app.use(`/api/${API_VERSION}`, authRoutes)

module.exports = app