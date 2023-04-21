const app = require("./src/app")
const mongooseConnect = require("./src/config/mongoose-connect.config.js.config")


const PORT = process.env.PORT || 3001

app.listen(PORT, async()=>{
    try {
        await mongooseConnect()
        console.log("listening at port ", PORT)
    } catch (error) {
        console.log(error)
    }
})