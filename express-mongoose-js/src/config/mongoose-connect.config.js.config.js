const mongoose  = require("mongoose");

async function mongooseConnect(){
    mongoose.connect(process.env.MONGODB_URI)
}

module.exports = mongooseConnect