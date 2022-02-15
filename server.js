require('dotenv').config()
require('./src/models/init-models')
const express = require('express')
const app = express()
const port = 3000
const clientRouter = require('./src/routes/clientRouter');
const db = require('./src/Db');
const { route } = require('./src/routes/clientRouter');

app.use(express.json()); // In order to parse requests json body

app.use('/', clientRouter);
// app.use('/dog', dogRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
