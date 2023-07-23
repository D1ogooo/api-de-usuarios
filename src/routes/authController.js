const express = require('express')
const User = require('./../models/Users')
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const UserData = req.body
    const newUser = await User.create(UserData)
    res.json(newUser)
  } catch (error) {
    console.log("falha ao criar usuario")
  }
})

module.exports = router