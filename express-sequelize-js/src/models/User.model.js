const { DataTypes } = require("sequelize")

module.exports = {
    createUserModel:(sequelize) => {
        return sequelize.define("User", {
            name:{
                type: DataTypes.STRING
            },
            lastname:{
                type:DataTypes.STRING
            }
        })
    }
}