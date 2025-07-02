const { GetCollection } = require("./mongodb")

const collName = "users"

async function insertUser(user){
    const col = await GetCollection(collName)
    const result = await col.insertOne(user)
    return result.insertedId
}

async function findUsers(){
    const col = await GetCollection(collName)
    const result = await col.find().toArray()
    return result
}

module.exports = {insertUser, findUsers}