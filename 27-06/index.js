const express = require("express")
const { createUser, GetUsers } = require("./services/users")
const app = express()
const port = 3031

app.use(express.json())

app.post("/",async (req, res) =>{
    const body = req.body
    console.log("USER: ",body)

    const id = await createUser(body)

    return res.status(201).json({id: id})
})

app.get("/", async (req, res) => {
    const result = await GetUsers()
    return res.status(200).json({response: result})
})


app.listen(port, () => {
    console.log("HALLO")
})