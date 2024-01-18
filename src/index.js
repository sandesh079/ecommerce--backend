
const express = require('express')
const connection = require('./db/connection')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
connection()
const User = require('./models/user')
app.use('/api', userRoute);
const port = process.env.PORT



app.post('/login', (req, res) =>{
  console.log(req.body)
  return res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

