const { insertUser, findUsers } = require("../data/users") ;

async function createUser(data) {
    return await insertUser(data)
}

async function GetUsers(){
    return await findUsers()
}
module.exports = {createUser, GetUsers}