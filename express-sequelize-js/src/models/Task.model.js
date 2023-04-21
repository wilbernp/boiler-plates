const { DataTypes } = require("sequelize")

module.exports = {
    createTaskModel: (sequelize) =>{
        return sequelize.define("Task", {
            title:{
                type: DataTypes.STRING
            },
            complete:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        })
        
    }
}