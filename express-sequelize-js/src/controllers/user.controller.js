
//POST api/users
async function createUser(req, res){
    res.send("post api/users")
}

//GET api/users
async function getUsers(req, res){
    res.send("get api/users")
}

//PUT api/users
async function updateUser(req, res){
    res.send("put api/users")
}

//DELETE api/users
async function deleteUser(req, res){
    res.send("delete api/users")
}


module.exports ={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}