const { Router } = require("express");
const { getTasks, createTask, updateTask, deleteTask, getTaskByID } = require("../controllers/tasks.controller");

const router = Router()

// POST api/tasks/
router.post("/", createTask)

//GET api/tasks/
router.get("/", getTasks)

//GET api/tasks/:id
router.get("/:id", getTaskByID)

//GET api/tasks/:id
router.put("/:id", updateTask)

//GET api/tasks/
router.delete("/:id", deleteTask)

module.exports = router