// importing packages
const express = require('express')
const cors = require('cors')
const app = express()
const hello = require('./routes/hello')

// middlewares
app.use(express.json())
app.use(cors())

// If you want your backend to be accessed via a single origin, you can do the following:
/**
  const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions))
*/

// adding routes
app.use('/hello', hello)

// port
const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Listening on Port: ${port}`))
