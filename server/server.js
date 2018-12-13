import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import db from './db'

//load our environmental variables
const dotenv = require('dotenv').config()

const router = require('./routes/router')

const app = express()
const PORT = process.env.PORT

//morgan is used for logging, requests and stuff
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))

//initialize our database
db.init()

//pass a instance of app to our internal file routers
//so we can use app in external files
router.initRouter(app)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
