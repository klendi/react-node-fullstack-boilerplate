import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import db from './db'

const dotenv = require('dotenv').config()
const router = require('./routes/router')

const app = express()
const PORT = 3500
db.init()

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router.attach(app)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
