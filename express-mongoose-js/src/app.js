require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const indexRouter = require("./routes/index.routes")


const app = express()
app.use(morgan("dev"))
app.use(express.json())

app.use("/api", indexRouter)

module.exports = app