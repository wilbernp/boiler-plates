const {TaskModel} = require("../../db")

// POST api/tasks
async function createTask(req, res){
    const {title, complete} = req.body
    try {
        await TaskModel.create({title, complete})
        res.sendStatus(201)
    } catch (error) {

        console.log(error)
        res.sendStatus(404)
    }
}

// GET api/tasks
async function getTasks(req, res){
    try {
        const tasks = await TaskModel.findAll()
        res.send(tasks)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}

// GET api/tasks/:id
async function getTaskByID(req, res){
    const id = req.params.id
    try {
        const task = await TaskModel.findByPk(id)
        if(!task){
            return res.status(404).json({msg:"Task not found"})
        }
        
        res.send(task)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}

// PUT api/tasks/:id
async function updateTask(req, res){
    const id = req.params.id
    const {title, complete} = req.body
    try {
        const task = await TaskModel.findByPk(id)

        if (!task) {
           return res.status(404).json({msg:"Task not found"})
        }

        const taskTitle = title || task.title
        task.set({complete,title:taskTitle})
        await task.save()
        res.send(task)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}

// DELETE api/tasks/:id
async function deleteTask(req, res){
    const id = req.params.id
    try {
        const task = await TaskModel.findByPk(id)
        if (!task) {
            return res.status(404).json({msg:"Task not found"})
         }
         await task.destroy()
         res.send(task)

    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}


module.exports = {
   createTask,
   getTasks,
   getTaskByID,
   updateTask,
   deleteTask
}