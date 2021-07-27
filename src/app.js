require('dotenv').config()
const express = require('express')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT

app.use(logger('dev'))


app.use(express.json())
app.use(express.urlencoded({ extended: false})) 

const postRouter = require('./routes/posts')


app.use('/posts', postRouter)


app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}`)

})

