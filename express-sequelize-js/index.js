require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const {sequelize} = require("./db")
const indexRouter = require("./src/routes/index.routes")

const PORT = process.env.PORT || 3001

const app = express()
app.use(morgan("dev"))
app.use(express.json())

app.use("/api", indexRouter)

app.listen(PORT, async()=>{
    try {
        await sequelize.sync({force:true})
        console.log("listening at port ", PORT)
    } catch (error) {
        console.log(error)
    }
})