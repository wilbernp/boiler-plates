const { Sequelize } = require("sequelize");
const { createTaskModel } = require("./src/models/Task.model");
const { createUserModel } = require("./src/models/User.model");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    logging: false
})

const TaskModel = createTaskModel(sequelize)
const UserModel = createUserModel(sequelize)

UserModel.hasMany(TaskModel)
TaskModel.belongsTo(UserModel)

module.exports = {
    sequelize,
    TaskModel,
    UserModel
}