const express = require('express')
const app = express()
const Authenticacao = require('./routes/authController')

app.use(express.json())
app.use('/auth', Authenticacao)

app.listen(3000)
