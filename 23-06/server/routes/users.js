const express = require('express')

export const router_users = express.Router()

router.get("/", (req, res) => {
    res.send("OLA USER")
})
router.get("/animais", (req, res) => {
    res.send("OLA USER")
})