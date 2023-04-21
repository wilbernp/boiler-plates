const { Router } = require("express");
const { createUser, getUsers, updateUser, deleteUser } = require("../controllers/user.controller");

const router = Router()

//POST api/users
router.post("/", createUser)

//GET api/users
router.get("/", getUsers)

//PUT api/users
router.put("/", updateUser)

//DELETE api/users
router.delete("/", deleteUser)



module.exports = router