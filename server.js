require('dotenv').config()
require('./src/models/init-models')
const express = require('express')
const app = express()
const port = 3000

// Routers
const clientRouter = require('./src/routes/clientRouter');
const consultationRouter = require('./src/routes/consultationRouter');

app.use('/', clientRouter);
app.use('/', consultationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
