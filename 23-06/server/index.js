const express = require('express')
const cors = require("cors")
const { router_users } = require('./routes/users')
const { router_produtos } = require('./routes/produtos')
const app = express()
const port = 3030 // 3000 - 8000

app.use(express.json())

app.use(cors())

app.use('/users', router_users)
app.use('/produtos', router_produtos)


// app.get('/', (req, res) => {
//   res.send('BATATAS!')
// })

// app.get("/nome", (req, res) => {
//   res.json({nome: "Francisco"})
// })

// app.get("/:name", (req, res) => {
//     const name = req.params.name
//     res.send(`OLA ${name}`)
// })


// app.get("/soma/:x/:y", (req, res) => {
//     const {x, y} = req.params
//     res.send(`Resultado:  ${Number(x) + Number(y)}`)
// })

// app.get("/subtrair", (req, res) => {
//     const {x, y} = req.query
//     res.send(`Resultado:  ${Number(x) - Number(y)}`)
// })


// app.post("/user", (req, res) => {
//     const body = req.body
    
//     res.json(body).status(201)
// })  


app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`)
})